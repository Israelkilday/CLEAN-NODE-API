import { ServerError } from "../errors";
import { HttpResponse } from "../protocols";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack ?? "Stack trace not avaliable"),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
