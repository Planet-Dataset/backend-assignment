import { Request, Response, Router } from "express";
import { CurrencyController } from "./currency";

const appRouter: Router = Router();

const currencyController = new CurrencyController();

appRouter.post("/currency", async (req: Request, res: Response) => {
  const newCurrency = await currencyController.add(
    req.body.name,
    req.body.code,
    req.body.bid,
    req.body.ask,
    req.body.spread
  );

  res.send(newCurrency);
});

appRouter.get("/currency/:code", async (req: Request, res: Response) => {
  const currency = await currencyController.findOneByCode(req.params.code);
  res.send(currency);
});

appRouter.delete("/currency/:code", async (req: Request, res: Response) => {
  await currencyController.remove(req.params.code);
  res.send("Currency was removed");
});

export default appRouter;
