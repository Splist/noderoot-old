import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from './config/service';

void async function() {

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        transform: true,
    }));

    const { config } = app.get<ConfigService>(ConfigService);

    await app.listen(config.port);
}();
