import { getRepository } from "typeorm";
import { Menu } from "../../../entities/Menu";

type CreateMenuRequest = {
  name: string;
  realatedId: string;
};
export class CreateMenuService {
  async execute({
    name,
    realatedId,
  }: CreateMenuRequest): Promise<Menu | Error> {
    const repo = getRepository(Menu);

    if (await repo.findOne({ name })) {
      return new Error("O name informada já foi cadastrado!");
    }
    if (realatedId) {
      const exists = await repo.findOne({ id: realatedId });
      if (!exists) {
        return new Error("Favor informar um id válido!");
      }
    }
    if (!name) {
      return new Error("O name deve ser informado!");
    }

    const menu = repo.create({ name, realatedId });
    await repo.save(menu);

    return menu;
  }
}
