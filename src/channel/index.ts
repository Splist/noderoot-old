import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './entity';
import { ChannelService } from './service';
import { ChannelController } from './controller';

@Module({
    imports: [TypeOrmModule.forFeature([Channel])],
    controllers: [ChannelController],
    providers: [ChannelService],
})
export class ChannelModule {}
