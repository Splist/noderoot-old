import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Channel } from '../channel/entity';

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(type => Channel, chan => chan.messages)
    channel: Channel;
}
