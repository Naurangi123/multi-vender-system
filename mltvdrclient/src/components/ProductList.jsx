import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductListing = () => {
  const navigate=useNavigate()
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 39.99,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 49.99,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      price: 59.99,
      image: 'https://via.placeholder.com/200',
    },
  ];

  const seeDetail=()=>{
    navigate('/product-detail')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4" onClick={()=>seeDetail()}>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                <button className="bg-gray-500 text-white py-2 px-4 border border-black rounded-lg hover:bg-green-600 hover:text-black transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
