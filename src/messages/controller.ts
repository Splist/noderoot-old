import { Controller, Get, Query } from '@nestjs/common';
import { FetchLatestInput } from './input';
import { MessagesService } from './service';

@Controller('messages')
export class MessagesController {

    constructor(
        private readonly service: MessagesService,
    ) {}
    
    @Get()
    fetchLatest(@Query() input: FetchLatestInput) {

        return this.service.fetchLatest(input.skip, input.take);
    }
}
