import { createUnionType, registerEnumType } from 'type-graphql';
import { CompoundChannel } from './compound/entity';

export const Channel = createUnionType({
    name: 'Channel',
    types: () => [CompoundChannel],
});

export enum ChannelType {
    Compound = 'CompoundChannel',
}

registerEnumType(ChannelType, {
    name: 'ChannelType',
});
