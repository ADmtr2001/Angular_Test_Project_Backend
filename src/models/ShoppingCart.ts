import { Schema, model, Types } from "mongoose";

export interface IShoppingCart {
  dishes: {dish: Types.ObjectId, amount: number}[];
}

const shoppingCartSchema = new Schema<IShoppingCart>(
  {
    dishes: {
      type: [{dish: Schema.Types.ObjectId, amount: Number}],
      required: [true, 'Please provide shopping cart dishes'],
    }
  },
  { timestamps: true }
);

export const ShoppingCart = model<IShoppingCart>("ShoppingCart", shoppingCartSchema);
