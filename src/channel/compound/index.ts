import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompoundChannel } from './entity';
import { CompoundService } from './service';
import { CompoundResolver } from './resolver';

const OrmModule = TypeOrmModule.forFeature([CompoundChannel]);

@Module({
    imports: [OrmModule],
    exports: [OrmModule],
    providers: [
        CompoundService,
        CompoundResolver,
    ],
})
export class CompoundModule {}
