export class CurrencyAlreadyExistsError extends Error {
  constructor() {
    super(`Currency already exists`);
  }
}
