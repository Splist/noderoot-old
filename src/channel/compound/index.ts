import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompoundEntity } from './entity';
import { CompoundService } from './service';
import { CompoundResolver } from './resolver';

const OrmModule = TypeOrmModule.forFeature([CompoundEntity]);

@Module({
    imports: [OrmModule],
    exports: [OrmModule],
    providers: [
        CompoundService,
        CompoundResolver,
    ],
})
export class CompoundModule {}
