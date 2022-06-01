import { Schema, model, Types } from "mongoose";

export interface IShoppingCart {
  dishes: {dish: Types.ObjectId, amount: number}[];
}

const shoppingCartSchema = new Schema<IShoppingCart>(
  {
    dishes: [{dish: Types.ObjectId, amount: Number}]
  },
  { timestamps: true }
);

export const ShoppingCart = model<IShoppingCart>("Dish", shoppingCartSchema);
