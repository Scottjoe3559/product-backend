import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('store')
export class StorePostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

}