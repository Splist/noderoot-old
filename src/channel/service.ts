import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelEntity } from './entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class ChannelService {

    private readonly logger = new Logger(this.constructor.name);

    constructor(
        @InjectRepository(ChannelEntity)
        private readonly repo: TreeRepository<ChannelEntity>,
    ) {}

    fetchTree() {
        return this.repo.findTrees();
    }

    fetchById(id: number) {
        return this.repo.findOne(id);
    }

    async create(input: Partial<ChannelEntity>) {

        const result = await this.repo.insert(input);

        // Result isn't strong typed for some reason
        return result.identifiers[0];
    }
}
