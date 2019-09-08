import { createUnionType, registerEnumType } from 'type-graphql';
import { NullChannel, CompoundChannel } from './objects';

// Graphql representation of a channel
// For database see ./entity.ts

// =!= Make sure these are in sync =!=

// Enum of all channel types
export enum ChannelType {
    Null = "NULL",
    Compound = "COMPOUND",
}

registerEnumType(ChannelType, {
    name: 'ChannelType',
});

// Union of all channel types
export const Channel = createUnionType({
    name: 'Channel',
    types: () => [
        NullChannel,
        CompoundChannel,
    ],
});

export type Channel = typeof Channel;
