import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY || '';
const ENDPOINT = process.env.ENDPOINT || '';

const postConfig = {
    headers: {
        'x-api-key': API_KEY, 
        'Content-Type': 'application/json'
    }
};

describe('Tests against the environment running in AWS', () => {

    it('getById query', async () => {
        const id: String = "123";
        const query = { "query": "query($id: ID!) { getById(id: $id) { id name } }", "variables": { id }};
        const response = await axios.post(ENDPOINT, query, postConfig);
        const expected = {
            "data": {
              "getById": {
                id,
                "name": "item " + id
              }
            }
          };

        expect(response.status).toEqual(200);
        expect(response.data).toEqual((expected));
    });

    it('items query', async () => {
        const query = { "query": "{ items { id name }}"};
        const response = await axios.post(ENDPOINT, query, postConfig);
        const expected = {
            "data": {
              "items": [
                {
                  "id": "1",
                  "name": "item 1"
                },
                {
                  "id": "2",
                  "name": "item 2"
                }
              ]
            }
          }

        expect(response.status).toEqual(200);
        expect(response.data).toEqual((expected));
    
    });

    it('putItem mutation', async () => {
        const id = '1';
        const name = 'name 1';
        const mutation = { 
            "query": "mutation($input: ItemInput!) { putItem(input: $input) { id name } }",
            "variables": { "input": {id, name}}
        };
        
        const response = await axios.post(ENDPOINT, mutation, postConfig);
        const expected = {
            "data": {
              "putItem": {
                id,
                name
              }
            }
          }

        expect(response.status).toEqual(200);
        expect(response.data).toEqual((expected));
    });

});