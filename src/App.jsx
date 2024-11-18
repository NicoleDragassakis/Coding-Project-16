import { useState } from 'react'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm';
import './App.css'

const App = () => {
  // Define the default list of products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Lip Gloss Pallete',
      price: 19.99,
      description: 'Pallete featuring 12 pink shades of lip gloss for mixing',
    },
    {
      id: 2,
      name: 'Eye Shadow Pallete',
      price: 19.99,
      description: 'Pallete of 12 eye-shadow shades in neutral tones for smokey eye looks',
    },
    {
      id: 3,
      name: 'Skin Care Package',
      price: 39.99,
      description: 'Skin Care Package',
    },
  ]);

  // Function to handle adding a new product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);
  };

  return (
    <div className="app">
      <h1>Product List</h1>

      {}
      <ProductList products={products} />

      {}
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;
