import { InvalidParamError, MissingParamError } from "@/presentation/errors";
import { badRequest, serverError } from "@/presentation/helpers/http-helper";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";
import { EmailValidator } from "../signup/signup-protocols";

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;

      if (!email) {
        return new Promise((resolve) =>
          resolve(badRequest(new MissingParamError("email"))),
        );
      }

      if (!password) {
        return new Promise((resolve) =>
          resolve(badRequest(new MissingParamError("password"))),
        );
      }

      const isValid = this.emailValidator.isValid(email);
      if (!isValid) {
        return new Promise((resolve) =>
          resolve(badRequest(new InvalidParamError("email"))),
        );
      }

      return Promise.resolve({ body: "Login successful", statusCode: 200 });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
