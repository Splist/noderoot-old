import { Module, Global } from '@nestjs/common';
import { ConfigService } from './service';

@Global()
@Module({
    providers: [{
        provide: ConfigService,
        useFactory: ConfigService.fromFile,
    }],
    exports: [
        ConfigService,
    ],
})
export class ConfigModule {}
