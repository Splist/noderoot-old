import { Resolver, Query } from '@nestjs/graphql';
import { ChannelService } from './service';

@Resolver()
export class ChannelResolver {

    constructor(
        private readonly channels: ChannelService,
    ) {}

    @Query(returns => String)
    tree() {
        return JSON.stringify(this.channels.fetchTree());
    }
}
