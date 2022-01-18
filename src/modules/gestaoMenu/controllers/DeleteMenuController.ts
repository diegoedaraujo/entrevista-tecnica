import { Request, Response } from "express";
import { DeleteMenuService } from "../services/DeleteMenuService";

export class DeleteMenuController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteMenuService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end();
  }
}
