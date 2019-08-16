import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entity';

@Injectable()
export class MessagesService {

    constructor(
        @InjectRepository(Message)
        private readonly messages: Repository<Message>,
    ) {}

    fetchLatest(skip: number, take: number) {

        return this.messages.find({
            skip,
            take,
        });
    }
}
