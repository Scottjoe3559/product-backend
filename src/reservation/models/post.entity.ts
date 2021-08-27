import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('reservation')
export class ReservationPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  date_of_arrival: string;

  @Column({ default: '' })
  total_guests: string;
}
