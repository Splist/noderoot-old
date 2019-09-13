import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CompoundService } from './service';
import { Int } from 'type-graphql';
import { CompoundChannel } from './entity';
import { RawScalar } from './raw';

@Resolver()
export class CompoundResolver {

    constructor(
        private readonly channels: CompoundService,
    ) {}

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
}
