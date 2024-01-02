import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Appointments')
export class Appointments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string
}
