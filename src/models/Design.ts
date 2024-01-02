import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Designs')
export class Design extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string
}
