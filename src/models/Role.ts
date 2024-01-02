import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Roles')
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string
}
