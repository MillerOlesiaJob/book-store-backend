import { getProductsList } from '../getProductsList.js';

jest.mock('../data', () => ({
  products: [
    {
      id: '1',
      title: 'Product 1',
      price: 10.99,
      imageUrl: 'https://example.com/product1.jpg'
    },
    {
      id: '2',
      title: 'Product 2',
      price: 102.99,
      imageUrl: 'https://example.com/product2.jpg'
    }
  ]
}));

describe('getProductsList', () => {
  it('should return products with correct status code and headers', async () => {
    const event = {};

    const result = await getProductsList(event);

    expect(result).toHaveProperty('statusCode', 200);
    expect(result).toHaveProperty('headers');
    expect(result.headers).toHaveProperty('Access-Control-Allow-Headers', '*');
    expect(result.headers).toHaveProperty('Access-Control-Allow-Origin', '*');
    expect(result.headers).toHaveProperty('Access-Control-Allow-Methods', '*');
    
    const parsedBody = JSON.parse(result.body);
    expect(parsedBody).toEqual([
      {
        id: '1',
        title: 'Product 1',
        price: 10.99,
        imageUrl: 'https://example.com/product1.jpg'
      },
      {
        id: '2',
        title: 'Product 2',
        price: 102.99,
        imageUrl: 'https://example.com/product2.jpg'
      }
    ]);
  });
});
