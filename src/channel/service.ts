import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from './entity';
import { TreeRepository } from 'typeorm';
import { ConfigService } from '../config/service';

@Injectable()
export class ChannelService {

    private readonly logger = new Logger(this.constructor.name);

    constructor(
        @InjectRepository(Channel)
        private readonly repo: TreeRepository<Channel>,
        private readonly configService: ConfigService,
    ) {
        this.ensureRootChannel();
    }

    async ensureRootChannel() {

        const tree = await this.fetchTree();

        if (tree.length > 0) return;

        this.logger.log('Root channel not found. Creating one...');

        const { config } = this.configService;

        await this.create({
            internalName: config.internalRootName,
        });

        this.logger.log('Root channel created.');
    }

    fetchTree() {
        return this.repo.findTrees();
    }

    fetchById(id: number) {
        return this.repo.findOne(id);
    }

    async create(input: Partial<Channel>) {

        const result = await this.repo.insert(input);

        // Result isn't strong typed for some reason
        return result.identifiers[0];
    }
}
