import { getRepository } from "typeorm";
import { Menu } from "../../../entities/Menu";

export class DeleteMenuService {
  async execute(id: string) {
    const repo = getRepository(Menu);

    if (!(await repo.findOne({ id }))) {
      return new Error("Não existe menu com o id informado!");
    }
    await repo.delete(id);
  }
}
