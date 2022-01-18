import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("menus")
export class Menu {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  realatedId: string;

  //TODO relations
  // @OneToMany((type) => Menu, (menu) => menu.id)
  // @JoinColumn({ name: "realatedId" })
  // submenus: Menu;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
