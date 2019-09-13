import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompoundChannel } from './entity';
import { CompoundService } from './service';
import { CompoundResolver } from './resolver';
import { RawScalar } from './raw';

const OrmModule = TypeOrmModule.forFeature([CompoundChannel]);

@Module({
    imports: [OrmModule],
    exports: [OrmModule],
    providers: [
        CompoundService,
        CompoundResolver,
        RawScalar,
    ],
})
export class CompoundModule {}
