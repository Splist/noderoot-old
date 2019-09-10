import { Resolver, Query } from '@nestjs/graphql';
import { CompoundService } from './service';

@Resolver()
export class CompoundResolver {

    constructor(
        private readonly channels: CompoundService,
    ) {}

    @Query()
    compound() {

    }
}
