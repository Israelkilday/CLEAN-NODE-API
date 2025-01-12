import { Collection, MongoClient, Document } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient | null,
  uri: null as string | null,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri, {});
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  },

  async getColection(name: string): Promise<Collection> {
    if (!this.client) {
      if (!this.uri) {
        throw new Error("MongoClient is not connected");
      }
      await this.connect(this.uri);
    }

    return this.client!.db().collection(name);
  },

  map<T extends { id: string }>(document: Document): T {
    const { _id, ...rest } = document as { _id?: any; [key: string]: any };
    return { ...rest, id: _id?.toString() } as T;
  },
};
