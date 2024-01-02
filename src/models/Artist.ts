import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Artists')
export class Artist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string

}
