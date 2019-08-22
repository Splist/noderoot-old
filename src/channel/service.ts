import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from './entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class ChannelService {
    
    constructor(
        @InjectRepository(Channel)
        private readonly repo: TreeRepository<Channel>,
    ) {}

    fetchTree() {
        return this.repo.findTrees();
    }

    fetchById(id: number) {
        return this.repo.findOne(id);   
    }
}