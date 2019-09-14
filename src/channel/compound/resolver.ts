import { Resolver, Query, Args, Mutation, ResolveProperty, Parent } from '@nestjs/graphql';
import { CompoundService } from './service';
import { Int, Arg } from 'type-graphql';
import { CompoundChannel } from './entity';
import { RawScalar } from './raw';
import { CreateChannelInput } from './input';

@Resolver(() => CompoundChannel)
export class CompoundResolver {

    constructor(
        private readonly channels: CompoundService,
    ) {}

    @ResolveProperty()
    children(
        @Parent() { id }: CompoundChannel
    ) {
        return this.channels.fetchChildren(id);
    }

    @Query(returns => CompoundChannel, { nullable: true })
    compoundChannel(
        @Args({ name: 'id', type: () => Int}) id: number,
    ) {
        return this.channels.fetchById(id);
    }

    @Query(returns => RawScalar)
    channelTree() {
        return this.channels.fetchTree();
    }

    @Query(returns => CompoundChannel)
    rootChannel() {
        return this.channels.fetchRoot();
    }

    @Mutation(returns => CompoundChannel)
    createCompound(
        @Args('input') input: CreateChannelInput,
    ) {
        return this.channels.create(input);
    }
}
