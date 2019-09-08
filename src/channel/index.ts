import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './entity';
import { ChannelService } from './service';
import { ChannelResolver } from './resolver';

@Module({
    imports: [TypeOrmModule.forFeature([ChannelEntity])],
    providers: [
        ChannelService,
        ChannelResolver,
    ],
})
export class ChannelModule {}
