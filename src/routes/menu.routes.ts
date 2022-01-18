import { Router } from "express";
import { CreateMenuController } from "../modules/gestaoMenu/controllers/CreateMenuController";
import { DeleteMenuController } from "../modules/gestaoMenu/controllers/DeleteMenuController";
import { GetAllMenuController } from "../modules/gestaoMenu/controllers/GetAllMenuController";

const menuRoutes = Router();
const createMenuController = new CreateMenuController();
const getAllMenuController = new GetAllMenuController();
const deleteMenuController = new DeleteMenuController();

menuRoutes.post("/", createMenuController.handle);
menuRoutes.get("/", getAllMenuController.handle);
menuRoutes.delete("/:id", deleteMenuController.handle);

export { menuRoutes };
