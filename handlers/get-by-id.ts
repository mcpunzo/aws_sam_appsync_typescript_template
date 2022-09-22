import { Item } from './appsync';


const getById = async (id: string): Promise<Item> => { 
    const item: Item = {id, name: `item ${id}`};
    return item;
}

export const getByIdResolver = async (context: any): Promise<Item> => {
    console.info('appsync resquest', context)
    if (! (context.arguments && context.arguments.id)) {
      throw new Error('missing "id" in arguments');
    }
    const id = context.arguments.id
    const response = await getById(id);
    console.info(`appsync handler response ${JSON.stringify(response)}`)
    return response;
  }