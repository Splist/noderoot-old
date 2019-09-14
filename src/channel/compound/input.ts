import { InputType, Field } from 'type-graphql';
import { Matches, Length, IsInt, Min } from 'class-validator';

@InputType()
export class CreateChannelInput {

    @Field()
    @Length(2, 30)
    @Matches(/^[a-z0-9_-]*$/)
    internalName: string;

    @Field()
    @IsInt()
    @Min(0)
    parent: number;
}
