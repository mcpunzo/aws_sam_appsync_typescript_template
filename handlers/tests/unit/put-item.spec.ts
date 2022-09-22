import { APIGatewayProxyEvent } from "aws-lambda";
import { Item, ItemInput } from "../../appsync";
import { putItemResolver } from "../../put-item";

describe('Unit test for putItemResolver function', () => {
    it('verifies successful response', async () => {
        const inputItem: ItemInput = {id: '1', name: 'name'};

        const event = {
            arguments: {
                input: {...inputItem}
            }
        } as any;

        const result = await putItemResolver(event)

        const expected: Item = {...inputItem};
        expect(result).toEqual(expected);
    });
});
