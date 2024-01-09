import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role";
import { Artist } from "./Artist";
import { Appointments } from "./Appointments";


@Entity ("user")
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    role_id!: number;
    
    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column()
    phone!: number;

    @Column()
    email!: string;

    @Column()
    password_hash!: string;

    @ManyToOne(() Role, (role)=>role.users)
    @JoinColumn ({name: "role_id"})
    role!:Role[];

    @ManyToOne(() => Artist, (artist) => artist.user)
    @JoinColumn ({name: "artist_id"})
    artist!: Artist[];

    @OneToMany(() => Appointments, (appointment) => appointment.user_id)
    clientAppointments!: Appointments[];


}
