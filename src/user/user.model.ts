import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid4} from "uuid"



@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid4()

    @Column()
    name:string

    @Column()
    surname: string

    @Column()
    username:string

    @Column()
    email: string

    @Column()
    phone_number:string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}