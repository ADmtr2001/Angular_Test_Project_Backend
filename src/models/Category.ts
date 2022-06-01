import { Schema, model } from "mongoose";

export interface ICategory {
  name: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "Please provide category name"],
    }
  },
  { timestamps: true }
);

export const Category = model<ICategory>("Category", categorySchema);
