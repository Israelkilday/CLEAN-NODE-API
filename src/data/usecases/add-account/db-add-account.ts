import { Encrypter } from "@/data/protocols/encrypter";
import { AccountModel } from "@/domain/models/account";
import { AddAccount, AddAccountModel } from "@/domain/use-cases/add-account";

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter;

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async add(account: AddAccountModel): Promise<AccountModel | null> {
    await this.encrypter.encrypt(account.password);

    return new Promise((resolve) => resolve(null));
  }
}
