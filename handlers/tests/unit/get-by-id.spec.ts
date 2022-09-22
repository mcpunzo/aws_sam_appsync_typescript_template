import { APIGatewayProxyEvent } from "aws-lambda";
import { Item } from "../../appsync";
import { getByIdResolver } from "../../get-by-id";

describe('Unit test for getByIdResolver function', () => {
    it('verifies successful response', async () => {
        const id = 'anyId';

        const event = {
            arguments: {
                id
            }
        } as any;
        const result = await getByIdResolver(event)

        const expected: Item = {id, name: `item ${id}`};
        expect(result).toEqual(expected);
    });
});
