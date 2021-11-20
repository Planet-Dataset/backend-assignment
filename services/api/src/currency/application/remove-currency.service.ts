import { CurrencyNotExistError } from "../domain";
import Currency from "../infrastructure/schema/currency.schema";

export class RemoveCurrencyService {
  public async remove(code: string): Promise<void> {
    const currencyRemoved = await Currency.findOneAndDelete({ code: code });
    if(!currencyRemoved) {
      throw new CurrencyNotExistError(code);
    }
  }
}
