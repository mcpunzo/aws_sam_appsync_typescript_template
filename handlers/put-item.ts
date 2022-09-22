import { Item, ItemInput } from './appsync';


const putItem = async (itemInput: ItemInput): Promise<Item> => { 
    const item: Item = {...itemInput};
    return item;
}

export const putItemResolver = async (context: any): Promise<Item> => {
  console.info("request", context);
  if (! (context.arguments && context.arguments.input)) {
    throw new Error("no arguments found");
  }

  const itemInput: ItemInput = context.arguments.input;
  const result = await putItem(itemInput);
  return result;
  }