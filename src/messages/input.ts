import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

// Query params are always strings so use @Type to cast it to number

export class FetchLatestInput {

    @Type(() => Number)
    @IsInt()
    @Min(0)
    skip: number;

    @Type(() => Number)
    @IsInt()
    @Min(0)
    @Max(50)
    take: number;
}
