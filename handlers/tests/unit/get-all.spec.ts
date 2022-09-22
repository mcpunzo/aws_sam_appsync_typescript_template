import { APIGatewayProxyEvent } from "aws-lambda";
import { Item } from "../../appsync";
import { getAllResolver } from "../../get-all";

describe('Unit test for getAllResolver function', () => {
    it('verifies successful response', async () => {
        const result = await getAllResolver({} as any);

        const expected: Item[] = [{id: '1', name: `item 1`}, {id: '2', name: `item 2`}];
        expect(result).toEqual(expected);
    });
});
