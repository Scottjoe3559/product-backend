import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StorePostEntity } from '../../store/models/post.entity';


@Entity('product')
export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: null })
  shop: number;
}
