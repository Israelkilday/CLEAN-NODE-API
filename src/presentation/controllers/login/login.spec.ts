import { badRequest } from "@/presentation/helpers/http-helper";
import { LoginController } from "./login";
import { MissingParamError } from "@/presentation/errors";

interface SutTypes {
  sut: LoginController;
}

const makeSut = (): SutTypes => {
  const sut = new LoginController();
  return {
    sut,
  };
};

describe("Login Controller", () => {
  test("Should return 400 if email not provided", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        password: "any_password",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError("email")));
  });

  test("Should return 400 if password not provided", async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: "any_@email.com",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError("password")));
  });
});
