import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompoundChannel } from './entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class CompoundService {

    constructor(
        @InjectRepository(CompoundChannel)
        private readonly repo: TreeRepository<CompoundChannel>,
    ) {
        // Ensure root channel exists
        this.fetchRoot()
            .catch(() => this.create({
                interalName: 'splist',
                children: [],
            }));
    }

    fetchById(id: number) {
        return this.repo.findOne(id);
    }

    async fetchTree() {

        const trees = await this.repo.findTrees();

        // "There can only be one!"
        return trees[0];
    }

    fetchRoot() {
        return this.repo.findOneOrFail({
            where: {
                parent: null,
            }
        });
    }

    async create(input: Partial<CompoundChannel>) {

        const result = await this.repo.insert(input);

        // Result isn't strong typed for some reason
        return result.identifiers[0];
    }
}
