import { Item } from './appsync';


const getAll = async (): Promise<Item[]> => { 
    const items: Item[] = [{id: '1', name: `item 1`}, {id: '2', name: `item 2`}];
    return items;
}

export const getAllResolver = async (context: any): Promise<Item[]> => {
    console.info('appsync resquest', context)
    const response = await getAll();
    console.info(`appsync handler response ${JSON.stringify(response)}`)
    return response;
  }