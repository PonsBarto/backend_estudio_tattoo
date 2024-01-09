import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm"
import { Users } from "./User";

@Entity('Roles')
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string

    @Column({unique: true})
    privilege!: string

    @Column()
    created_At!: Date

    @Column()
    updated_At!: Date

    @OneToMany(()=> user, (user)=> user.role)
    @JoinColumn({
        name: "user_role",
        referencedColumnName: "id"
    })
    users!: User[];
   
}
