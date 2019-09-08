import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config';
import { ChannelModule } from './channel';

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
    ],
})
export class AppModule {}
