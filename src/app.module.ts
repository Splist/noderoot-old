import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const Typeorm = TypeOrmModule.forRoot({
    type: 'sqlite',
    database: __dirname + '/../data/splist.sqlite',
    entities: [__dirname + '/**/?(*.)entity.ts'],
    synchronize: true,
});

@Module({
    imports: [Typeorm],
})
export class AppModule {}
