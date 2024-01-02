import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string
}
