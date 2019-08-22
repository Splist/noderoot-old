import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entity';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [],
    providers: [],
})
export class MessageModule {}
