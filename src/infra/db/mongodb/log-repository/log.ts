import { LogErrorRepository } from "@/data/protocols/log-error-repository";
import { MongoHelper } from "../helpers/mongodb-helper";

export class logMongoRepository implements LogErrorRepository {
  async logError(stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getColection("errors");

    await errorCollection.insertOne({
      stack,
      date: new Date(),
    });
  }
}
