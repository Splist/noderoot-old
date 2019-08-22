import { Entity, PrimaryGeneratedColumn, Tree, Column, TreeParent, TreeChildren, OneToMany } from 'typeorm';
import { Message } from '../message/entity';

@Entity()
@Tree('nested-set')
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    internalName: string;

    @TreeParent()
    parent: Channel;

    @TreeChildren()
    children: Channel[];

    @OneToMany(type => Message, msg => msg.channel)
    messages: Message[];
}
