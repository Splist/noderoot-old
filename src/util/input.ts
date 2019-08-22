import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class FetchByIdInput {

    @Type(() => Number)
    @IsInt()
    @Min(0)
    id: number;
}
