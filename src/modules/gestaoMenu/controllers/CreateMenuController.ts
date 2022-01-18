import { Request, Response } from "express";
import { CreateMenuService } from "../services/CreateMenuService";

export class CreateMenuController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, realatedId } = request.body;
    const service = new CreateMenuService();
    const result = await service.execute({ name, realatedId });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
