// ProductItem.jsx
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </li>
  );
};

export default ProductItem;
