import { getRepository } from "typeorm";
import { Menu } from "../../../entities/Menu";

export class GetAllMenuService {
  async execute(): Promise<Menu[]> {
    const repo = getRepository(Menu);
    const menus = await repo.find({
      relations: ["submenu"],
    });
    return menus;
  }
}
