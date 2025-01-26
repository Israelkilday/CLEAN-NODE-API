import { LogErrorRepository } from "@/data/protocols/log-error-repository";
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class LogControllerDecorator implements Controller {
  private readonly controler: Controller;
  private readonly logErrorRepository: LogErrorRepository;

  constructor(controler: Controller, logErrorRepository: LogErrorRepository) {
    this.controler = controler;
    this.logErrorRepository = logErrorRepository;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controler.handle(httpRequest);

    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.log(httpResponse.body.stack);
    }

    return httpResponse;
  }
}
