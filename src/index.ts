import "dotenv/config";
import "express-async-errors";

import express from "express";

import { connectDB } from "./db/connect";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware";

import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import helmet from "helmet";
import cors from "cors";
import {dishRouter} from "./routes";

// import {
//   announcementRouter,
//   categoryRouter,
//   commentRouter,
//   userRouter,
// } from "./routes";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(helmet({}));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.set("trust proxy", 1);

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

// app.use("/api/v1/user", userRouter);
app.use("/api/v1/dish", dishRouter);
// app.use("/api/v1/category", categoryRouter);

app.get('/', (req, res) => {
  res.send('Work');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
