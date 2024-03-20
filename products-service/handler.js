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

module.exports.getProductsList = async () => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*"
  },
    body: JSON.stringify(products)
  };
};
