import { Entity, PrimaryGeneratedColumn, Tree, Column, TreeParent, TreeChildren } from 'typeorm';
import { ChannelType } from './types';

// Database representation of a channel
// For graphql see ./types.ts
@Entity()
@Tree('nested-set')
export class ChannelEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: ChannelType;

    @Column()
    internalName: string;

    @TreeParent()
    parent: ChannelEntity;

    @TreeChildren()
    children: ChannelEntity[];
}
