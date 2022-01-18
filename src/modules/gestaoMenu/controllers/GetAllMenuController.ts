import { Request, Response } from "express";
import { GetAllMenuService } from "../services/GetAllMenuService";

export class GetAllMenuController {
  async handle(request: Request, response: Response) {
    const service = new GetAllMenuService();
    const menus = await service.execute();

    return response.json(menus);
  }
}
