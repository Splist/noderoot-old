import { Controller, Get, Param } from '@nestjs/common';
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
    fetchById(
        @Param() { id }: FetchByIdInput,
    ) {
        return this.channels.fetchById(id);
    }
}
