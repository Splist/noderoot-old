import { Entity, Tree, TreeParent, TreeChildren } from 'typeorm';
import { BaseChannel } from '../entity';
import { ObjectType, Field } from 'type-graphql';

@Entity()
@Tree('nested-set')
@ObjectType({ implements: BaseChannel })
export class CompoundChannel extends BaseChannel {

    @TreeParent()
    @Field()
    parent?: CompoundChannel;

    @TreeChildren()
    @Field(type => [CompoundChannel])
    children: CompoundChannel[]
}
