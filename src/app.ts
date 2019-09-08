import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config';
import { ChannelModule } from './channel';

const RootTypeOrmModule = TypeOrmModule.forRoot({
    type: 'sqlite',
    database: __dirname + '/../data/splist.sqlite',
    entities: [__dirname + '/**/?(*.)entity.ts'],
    synchronize: true,
});

// [TODO] Add better config for these
const GENERATE_SCHEMA = false;
const PRODUCTION = process.env.NODE_ENV === 'production';

const RootGraphQLModule = GraphQLModule.forRoot({

    // autoSchemaFile must be true or string for it to work
    autoSchemaFile: GENERATE_SCHEMA ? 'schema.gql' : true,

    // Only in dev
    playground: !PRODUCTION,
});

@Module({
    imports: [
        RootTypeOrmModule,
        RootGraphQLModule,
        ConfigModule,
        ChannelModule,
    ],
})
export class AppModule {}
