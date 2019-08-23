import { Controller, Get, Param, Post, NotFoundException, Body } from '@nestjs/common';
import { ChannelService } from './service';
import { FetchByIdInput } from '../util/input';
import { CreateChannelInput } from './input';

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

    @Post()
    async create(
        @Body() input: CreateChannelInput,
    ) {
        const parent = await this.channels.fetchById(input.parent);

        if (!parent) throw new NotFoundException(`Parent channel by id '${input.parent}' not found.`);

        return this.channels.create({
            ...input,
            parent,
        });
    }
}
