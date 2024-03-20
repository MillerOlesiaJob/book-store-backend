'use strict';

const products = [
  {
    id: '1',
    title: 'Product 1',
    price: 10.99,
    imageUrl: 'https://example.com/product1.jpg'
  },
  {
    id: '2',
    title: 'Product 2',
    price: 12.99,
    imageUrl: 'https://example.com/product2.jpg'
  },
  // Add more products as needed
];

module.exports.getProductsById = async (event) => {
  const productId = event.pathParameters.productId;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Product not found' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(product)
  };
};
