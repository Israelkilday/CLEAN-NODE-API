import { AddAccountRepository } from "@/data/protocols/add-account-repository";
import { AccountModel } from "@/domain/models/account";
import { AddAccountModel } from "@/domain/use-cases/add-account";
import { MongoHelper } from "../helpers/mongodb-helper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getColection("accounts");
    const result = await accountCollection.insertOne(accountData);
    const account = await accountCollection.findOne({ _id: result.insertedId });

    // const { _id, ...accountWidthoutId } = account;
    // return Object.assign({}, accountWidthoutId, { id: _id });

    if (!account) {
      throw new Error("Failed to find the inserted account");
    }

    const mappedAccount: AccountModel = {
      id: account._id.toString(),
      name: account.name,
      email: account.email,
      password: account.password,
    };

    return mappedAccount;
  }
}
