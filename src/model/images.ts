import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from 'typeorm';
import Orphanage from './orphanates';

@Entity('images')
export default class Images{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    path: string;
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanages_id'})
    orphanage: Orphanage
}