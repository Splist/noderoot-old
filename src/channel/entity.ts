import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export abstract class ChannelEntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    interalName: string;
}
