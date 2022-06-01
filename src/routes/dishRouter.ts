import {Router} from "express";
import {dishController} from "../controllers";

const router = Router();

router
  .route('/')
  .get(dishController.getAllDishes)
  .post(dishController.createDish);

router
  .route('/:id')
  .patch(dishController.updateDish)
  .delete(dishController.removeDish);

export default router;
