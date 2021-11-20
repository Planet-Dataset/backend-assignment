import { CurrencyAggregate } from "../domain";
import Currency from "../infrastructure/schema/currency.schema";

export class GetCurrencyByCodeService {
  public async findByCode(code: string): Promise<CurrencyAggregate | null> {
    const currency: CurrencyAggregate = await Currency.findOne({ code: code });
    return currency;
  }
}
