import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class LogControllerDecorator implements Controller {
  private readonly controler: Controller;

  constructor(controler: Controller) {
    this.controler = controler;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controler.handle(httpRequest);
    return httpResponse;
  }
}
