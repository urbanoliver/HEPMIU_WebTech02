import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Weapon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Price: number;

    @Column()
    Manufacturer: string;

    @Column()
    Quantity: number;

}
