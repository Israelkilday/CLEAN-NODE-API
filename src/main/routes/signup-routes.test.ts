import request from "supertest";
import app from "../config/app";
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";

describe("SignUp Routes", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getColection("accounts");
    await accountCollection.deleteMany({});
  });

  test("Should return an account success", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Israel Kilday",
        email: "israelkilday@yahoo.com.br",
        password: "123",
        passwordConfirmation: "123",
      })
      .expect(200);
  });
});
