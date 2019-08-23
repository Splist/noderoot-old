import { Matches, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChannelInput {

    @Matches(/^[a-z0-9_-]*$/)
    internalName: string;

    @Type(() => Number)
    @IsInt()
    @Min(0)
    parent: number;
}
