import { Scalar, CustomScalar } from '@nestjs/graphql';

@Scalar('Raw')
export class RawScalar implements CustomScalar<unknown, unknown> {

    description = 'Graphql doesn\'t allow recursive fragments so here\'s a work around';

    parseLiteral(value: unknown) {
        return value;
    }

    parseValue(value: unknown) {
        return value;
    }

    serialize(value: unknown) {
        return value;
    }
}
