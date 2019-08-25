import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';
import { promises } from 'fs';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Config, defaultConfig } from './Config';
const { readFile, writeFile } = promises;

const CONFIG_FILE_PATH = join(__dirname, '../../config.json');

@Injectable()
export class ConfigService {

    constructor(
        public readonly config: Config,
    ) {}

    // Service factory
    static async fromFile() {

        const logger = new Logger(ConfigService.name);

        // This gets set in the try/catch
        let file: Config;

        try {
            const content = await readFile(CONFIG_FILE_PATH, 'utf8');

            // Set the let
            file = JSON.parse(content);
        }
        // If there's no file or it can't be parsed
        catch {

            logger.log('No config file found. Creating new one...');

            // Set the let
            file = defaultConfig;

            // Write the default config to file
            const content = JSON.stringify(defaultConfig);

            await writeFile(CONFIG_FILE_PATH, content);

            logger.log('New config file created.');
        }

        // Validate the config
        const config = plainToClass(Config, file);

        const errors = await validate(config);

        // Throw validation errors
        if (errors.length > 0) throw new Error(errors.join('\n'));

        return new ConfigService(config);
    }
}
