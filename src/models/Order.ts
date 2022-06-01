import { Schema, model, Types } from "mongoose";

export interface IOrder {
  customer: Types.ObjectId;
  dishes: {dish: Types.ObjectId, amount: number}[];
}

const orderSchema = new Schema<IOrder>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide customer']
    },
    dishes: {
      type: [{dish: Schema.Types.ObjectId, amount: Number}],
      required: [true, 'Please provide order dishes'],
    }
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", orderSchema);
