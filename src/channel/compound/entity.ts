import { Entity, Tree, TreeParent, TreeChildren } from 'typeorm';
import { ChannelEntityBase } from '../entity';
import { ObjectType, Field, Int } from 'type-graphql';

@Entity()
@Tree('nested-set')
@ObjectType()
export class CompoundChannel extends ChannelEntityBase {

    @TreeParent()
    @Field()
    parent?: CompoundChannel;

    @TreeChildren()
    @Field(type => [CompoundChannel])
    children: CompoundChannel[]
}
