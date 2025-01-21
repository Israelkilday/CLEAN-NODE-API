import { MongoHelper as sut } from "./mongodb-helper";

describe("Mongo Helper", () => {
  beforeAll(async () => {
    const mongoUrl =
      process.env.MONGO_URL ?? "mongodb://localhost:27017/clean-node-api";
    await sut.connect(mongoUrl);
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  test("Should reconect mongodb s down", async () => {
    let accountCollection = await sut.getColection("accounts");
    expect(accountCollection).toBeTruthy();
    await sut.disconnect();
    accountCollection = await sut.getColection("accounts");
    expect(accountCollection).toBeTruthy();
  });
});
