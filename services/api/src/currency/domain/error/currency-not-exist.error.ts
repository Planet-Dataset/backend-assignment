export class CurrencyNotExistError extends Error {
  constructor(code: string){
    super(`Currency with code: ${code} does not exists`);
  }
}