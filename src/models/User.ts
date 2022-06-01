import { Schema, model, Types } from "mongoose";

import bcrypt from "bcrypt";

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: "user" | "admin";
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide rating"],
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add a valid email address.",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please provide password"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model<IUser>("User", userSchema);

export default User;
