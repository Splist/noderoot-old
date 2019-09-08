import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelEntity } from './entity';
import { ChannelService } from './service';

@Module({
    imports: [TypeOrmModule.forFeature([ChannelEntity])],
    providers: [ChannelService],
})
export class ChannelModule {}
