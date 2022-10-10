import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
  @Column()
  id: number;

  @Column()
  firstName: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
