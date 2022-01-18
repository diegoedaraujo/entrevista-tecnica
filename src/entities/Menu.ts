import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("menus")
export class Menu {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  realatedId: string;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: "realatedId" })
  submenu: Menu;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
