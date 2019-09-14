import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { InterfaceType, Field, Int } from 'type-graphql';

@Entity()
@InterfaceType()
export abstract class BaseChannel {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    internalName: string;
}
