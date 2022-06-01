import { Schema, model, Types } from "mongoose";

export interface IDish {
  title: string;
  price: number;
  category: Types.ObjectId;
  description: string;
  image: string;
  imageId: string;
  ingredients: string[];
}

const dishSchema = new Schema<IDish>(
  {
    title: {
      type: String,
      required: [true, "Please provide dish title"],
    },
    price: {
      type: Number,
      required: [true, 'Please provide dish price']
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Please provide dish category']
    },
    description: {
      type: String,
      required: [true, 'Please provide dish description']
    },
    image: {
      type: String,
      required: [true, "Please provide image"],
    },
    imageId: {
      type: String,
      required: [true, "Please provide image id"],
    },
    ingredients: {
      type: [String],
      required: [true, 'Please provide dish ingredients']
    },
  },
  { timestamps: true }
);

export const Dish = model<IDish>("Dish", dishSchema);
