import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("menus")
export class Menu {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  realatedId: string;

  @OneToMany((type) => Menu, (menu) => menu.id)
  @JoinColumn({ name: "realatedId" })
  submenus: Menu;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
