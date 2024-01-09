import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Artist } from "./Artist"

@Entity('Designs')
export class Design extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: string

    @Column()
    name!: string

    @Column()
    surname!: string

    @Column()
    porfolio!: string

    @Column()
    created_At!: Date

    @Column()
    updated_At!: Date

    @ManyToOne(() => Artist, (artist) => artist.users)
    @JoinColumn ({name: "user_id"})
    artist!: Artist;
}
