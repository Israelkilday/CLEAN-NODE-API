import { Collection, MongoClient } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient | null,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL!, {});
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  },

  getColection(name: string): Collection {
    if (!this.client) {
      throw new Error("MongoClient is not connected");
    }
    return this.client.db().collection(name);
  },
};
