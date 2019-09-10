import { Entity, Tree, TreeParent, TreeChildren } from 'typeorm';
import { ChannelEntityBase } from '../entity';
import { ObjectType, Field, Int } from 'type-graphql';

@Entity()
@Tree('nested-set')
export class CompoundEntity extends ChannelEntityBase {

    @TreeParent()
    parent?: CompoundEntity;

    @TreeChildren()
    children: CompoundEntity[]
}

@ObjectType()
export class CompoundChannel {

    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    parent?: CompoundChannel;

    // [TODO] Change when implementing other channels
    @Field(type => [CompoundChannel])
    children: CompoundChannel;
}
