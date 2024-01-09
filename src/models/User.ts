import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role";
import { Artist } from "./Artist";
import { Appoinment } from "./Appointments";


@Entity ("User")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    role_id!: number;
    
    @Column({unique: true})
    username!: string;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column({unique: true})
    phone!: number;

    @Column({unique: true})
    email!: string;

    @Column()
    password_hash!: string;

    @ManyToOne(() => Role, (role)=>role.User)
    @JoinColumn ({name: "role_id"})
    role!:Role[];

    @ManyToOne(() => Artist, (artist) => artist.User)
    @JoinColumn ({name: "artist_id"})
    artist!: Artist[];

    @OneToMany(() => Appoinment, (appointment) => appointment.User)
    clientAppointments!: Appoinment[];


}
