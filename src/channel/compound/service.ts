import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompoundEntity, CompoundChannel } from './entity';
import { TreeRepository } from 'typeorm';

@Injectable()
export class CompoundService {

    constructor(
        @InjectRepository(CompoundEntity)
        private readonly repo: TreeRepository<CompoundEntity>,
    ) {}

    fetchById(id: number) {
        return this.repo.findOne(id);
    }

    async fetchTree() {

        const trees = await this.repo.findTrees();

        // "There can only be one!"
        return trees[0];
    }

    async create(input: Partial<CompoundEntity>) {

        const result = await this.repo.insert(input);

        // Result isn't strong typed for some reason
        return result.identifiers[0];
    }
}
