import { MissingParamError } from "@/presentation/errors";
import { badRequest } from "@/presentation/helpers/http-helper";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class LoginController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise((resolve) =>
      resolve(badRequest(new MissingParamError("email"))),
    );
  }
}
