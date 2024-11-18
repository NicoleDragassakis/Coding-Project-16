import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}  //TASK FIVE ensure each product Item in the list is given a key prop
            product={product}  
          />
        ))}
      </ul>
    </div>
  );
};


export default ProductList;
