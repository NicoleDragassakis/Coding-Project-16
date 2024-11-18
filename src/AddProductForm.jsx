import React, { useState } from 'react'

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && price && description) {
      // Create a new product object
      const newProduct = {
        name,
        price: parseFloat(price),
        description,
      };


      addProduct(newProduct);

      // Reset the form fields
      setName('');
      setPrice('');
      setDescription('');
    } else {
      alert('Missing Requirements');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
