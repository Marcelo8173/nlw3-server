import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './images';

@Entity('orphanages')
export default class Orphanages{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    about: string;
    @Column()
    instuctions: string;
    @Column()
    open_hours: string;
    @Column()
    open_on_weekends: boolean;
    @OneToMany(() => Image, images => images.orphanage, {
        cascade: ['insert','update']
    })
    @JoinColumn({name: 'orphanages_id'})
    images: Image[]
}