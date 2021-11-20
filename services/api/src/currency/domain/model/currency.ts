export class CurrencyAggregate {
  private _name: string;
  private _code: string;
  private _bid: number;
  private _ask: number;
  private _spread: number;
  private _createdAt: Date;
  private _deletedAt: Date;

  constructor(
    name: string,
    code: string,
    bid?: number,
    ask?: number,
    spread?: number
  ) {
    this._name = name;
    this._code = code;
    this._bid = bid;
    this._ask = ask;
    this._spread = spread;
    this._createdAt = new Date();
  }

  get name(): string {
    return this._name;
  }

  get code(): string {
    return this._code;
  }

  get bid(): number {
    return this._bid;
  }

  get ask(): number {
    return this._ask;
  }

  get spread(): number {
    return this._spread;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }
}
