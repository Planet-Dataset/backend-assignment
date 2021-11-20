import { Request, Response } from "express";

import {
  AddCurrencyService,
  GetCurrencyByCodeService,
  RemoveCurrencyService,
} from "../../application";
import { CurrencyAggregate } from "../../domain";

export class CurrencyController {
  private addCurrencyService = new AddCurrencyService();
  private getCurrencyByCodeService = new GetCurrencyByCodeService();
  private removeCurrencieService = new RemoveCurrencyService();

  async add(
    name: string,
    code: string,
    bid?: number,
    ask?: number,
    spread?: number
  ): Promise<CurrencyAggregate> {
    try {
      const currency = new CurrencyAggregate(name, code, bid, ask, spread);
      return await this.addCurrencyService.add(currency);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error("Server Error");
      }
    }
  }

  async findOneByCode(code: string): Promise<CurrencyAggregate | null> {
    try {
      console.debug(code);
      return await this.getCurrencyByCodeService.findByCode(code);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error("Server Error");
      }
    }
  }

  async remove(code: string): Promise<void> {
    try {
      return await this.removeCurrencieService.remove(code);
    } catch (e) {
      if (e instanceof Error) {
        throw e;
      } else {
        throw new Error("Server Error");
      }
    }
  }
}
