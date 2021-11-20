import { model, Schema } from "mongoose";

const CurrencySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  bid: { type: Number },
  ask: { type: Number },
  spread: { type: Number },
});

export default model("Currency", CurrencySchema);
