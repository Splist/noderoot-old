import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CompoundService } from './service';
import { Int } from 'type-graphql';

@Resolver()
export class CompoundResolver {

    constructor(
        private readonly channels: CompoundService,
    ) {}

    @Query()
    compound(
        @Args({ name: 'id', type: () => Int}) id: number,
    ) {
        return this.channels.fetchById(id);
    }

    @Query()
    tree() {
        return this.channels.fetchTree();
    }
}
