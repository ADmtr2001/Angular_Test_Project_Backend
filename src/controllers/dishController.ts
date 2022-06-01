import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {dishService} from "../services";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

class DishController {
  async getAllDishes(req: Request, res: Response) {
    const dishes = await dishService.getAllDishes();
    res.status(StatusCodes.OK).json(dishes);
  }

  async createDish(req: Request, res: Response) {
    const {title, price, category, description, ingredients} = req.body;
    const file = await cloudinary.uploader.upload(
      // @ts-ignore
      req.files.image.tempFilePath,
      {
        folder: "Dishes",
      }
    );

    const dish = await dishService.createDish(
      title,
      price,
      category,
      description,
      file.secure_url,
      file.public_id,
      ingredients
    );

    // @ts-ignore
    fs.unlinkSync(req.files.image.tempFilePath);

    res.status(StatusCodes.CREATED).json(dish);
  }

  async updateDish(req: Request, res: Response) {

  }

  async removeDish(req: Request, res: Response) {

  }
}

export default new DishController();
