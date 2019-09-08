import { InterfaceType, Field, ObjectType } from 'type-graphql';
import { ChannelType, Channel } from './types';

type UseBeforeDeclareErrorsAreAnoying = CompoundChannel;

// Base interface all channels implement
@InterfaceType()
export abstract class BaseChannel {

    @Field()
    id: number;

    @Field(type => ChannelType)
    type: ChannelType;

    @Field()
    internalName: string;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    @Field(type => CompoundChannel, { nullable: true })
    parent?: UseBeforeDeclareErrorsAreAnoying;
}

// A channel with nothing but required
@ObjectType({ implements: BaseChannel })
export class NullChannel implements BaseChannel {

    id: number;
    internalName: string;
    parent?: CompoundChannel;

    type: ChannelType.Null;
}

// A channel with children
@ObjectType({ implements: BaseChannel })
export class CompoundChannel implements BaseChannel {

    id: number;
    internalName: string;
    parent?: CompoundChannel;

    type: ChannelType.Compound;

    @Field(type => Channel)
    children: Channel[];
}
