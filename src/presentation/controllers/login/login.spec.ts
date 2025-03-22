import { badRequest } from "@/presentation/helpers/http-helper";
import { LoginController } from "./login";
import { MissingParamError } from "@/presentation/errors";

describe("Login Controller", () => {
  test("Should return 400 if email not provided", async () => {
    const sut = new LoginController();
    const httpRequest = {
      body: {
        password: "any_password",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError("email")));
  });
});
