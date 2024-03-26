import { getProductsById } from '../getProductsById.js';

describe('getProductsById', () => {
  test('returns 404 status code and error message if product is not found', async () => {
    const event = { pathParameters: { productId: 'nonexistent-id' } };
    const response = await getProductsById(event);
    expect(response.statusCode).toBe(404);
    expect(JSON.parse(response.body)).toEqual({ message: 'Product not found' });
  });

  test('returns 200 status code and product details if product is found', async () => {
    const event = { pathParameters: { productId: '1' } }; // Assuming product with id '1' exists
    const response = await getProductsById(event);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      id: '1',
      title: 'Product 1',
      price: 10.99,
      imageUrl: 'https://example.com/product1.jpg'
    });
  });
});

