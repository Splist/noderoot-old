import { Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { ChannelService } from './service';
import { FetchByIdInput } from '../util/input';

@Controller('channels')
export class ChannelController {

    constructor(
        private readonly channels: ChannelService,
    ) {}

    @Get()
    fetchTree() {
        return this.channels.fetchTree();
    }

    @Get(':id')
    async fetchById(
        @Param() { id }: FetchByIdInput,
    ) {
        const channel = await this.channels.fetchById(id);

        if (!channel) throw new NotFoundException(`Channel by id '${id}' not found.`);

        return channel;
    }
}
