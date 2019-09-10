import { Module } from '@nestjs/common';
import { CompoundModule } from './compound';

@Module({
    imports: [
        CompoundModule,
    ],
})
export class ChannelModule {}
