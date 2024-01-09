import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Appointments } from "./Appointments"
import { Design } from "./Design"

@Entity('Artists')
export class Artist extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column()
    portfolio!: string;

    @Column()
    created_At!: Date

    @Column()
    updated_At!: Date

    @OneToOne(() => User, (user) => user.role)
    users!: User[];

    @OneToMany(() => Design, (design) => design)
    design!: Design[];

    @OneToMany(() => Appointments, (appointment) => appointment.artist)
    clientAppointments!: Appointments[];
}
