import {Dish} from "../models/Dish";
import {Types} from "mongoose";

class DishService {
  async getAllDishes() {
    const dishes = await Dish.find({});
    return dishes;
  }

  async createDish(
    title: string,
    price: number,
    category: Types.ObjectId,
    description: string,
    image: string,
    imageId: string,
    ingredients: string[],
  ) {
    const dish = await Dish.create({
      title,
      price,
      category,
      description,
      image,
      imageId,
      ingredients
    });

    return dish;
  }

  async updateDish() {

  }

  async removeDish() {

  }
}

export default new DishService();
