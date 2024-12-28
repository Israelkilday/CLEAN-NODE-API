import request from "supertest";
import app from "../config/app";

describe("SignUp Routes", () => {
  test("Should return an account success", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Israel Kilday",
        email: "israelkilday@yahoo.com.br",
        password: "123",
        passwordConfirmation: "132",
      })
      .expect(200);
  });
});
