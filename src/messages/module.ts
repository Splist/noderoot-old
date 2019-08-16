import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity';
import { MessagesController } from './controller';
import { MessagesService } from './service';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [MessagesController],
    providers: [MessagesService],
})
export class MessagesModule {}
