import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity()
export class CrudUserdata {
  @PrimaryGeneratedColumn("uuid")
  id: string;
 
  @Column()
  name: string;
 
  @Column()
  email: string;
 
  @Column()
  mobile: number;

  @Column()
  city: string;
}