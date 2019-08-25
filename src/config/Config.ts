import { Matches, IsInt, Min, Max } from 'class-validator';

export class Config {

    @IsInt()
    @Min(1)
    @Max(65535)
    port: number;

    @Matches(/^[a-z0-9_-]*$/)
    internalRootName: string;
}

export const defaultConfig: Config = {

    port: 8080,
    internalRootName: 'just-a-splist-root',
};
