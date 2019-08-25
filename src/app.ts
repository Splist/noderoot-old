import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelModule } from './channel';
import { MessageModule } from './message';
import { ConfigModule } from './config';

const RootTypeOrmModule = TypeOrmModule.forRoot({
    type: 'sqlite',
    database: __dirname + '/../data/splist.sqlite',
    entities: [__dirname + '/**/?(*.)entity.ts'],
    synchronize: true,
});

@Module({
    imports: [
        RootTypeOrmModule,
        ConfigModule,
        ChannelModule,
        MessageModule,
    ],
})
export class AppModule {}
