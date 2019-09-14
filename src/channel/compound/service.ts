import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompoundChannel } from './entity';
import { TreeRepository } from 'typeorm';
import { CreateChannelInput } from './input';

@Injectable()
export class CompoundService {

    constructor(
        @InjectRepository(CompoundChannel)
        private readonly repo: TreeRepository<CompoundChannel>,
    ) {
        // Ensure root channel exists
        this.fetchRoot()
            .catch(() => this.repo.insert({
                internalName: 'splist',
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

    async create(input: CreateChannelInput) {

        const parent = await this.repo.findOneOrFail(input.parent);

        const result = await this.repo.insert({
            ...input,
            parent,
        });

        // Result isn't strong typed for some reason
        return result.identifiers[0];
    }

    async fetchChildren(id: number) {

        const parent = await this.repo.findOneOrFail({
            where: {
                id,
            },
            relations: ['children'],
        });

        return parent.children;
    }
}
