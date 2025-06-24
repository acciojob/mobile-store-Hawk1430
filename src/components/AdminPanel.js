import React, { useContext, useState } from 'react'
import {ProductContext} from '../components/MobileContext/ProductContext'

const AdminPanel = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [editingId, setEditingId] = useState(null);
  const [editProductData, setEditProductData] = useState({});

  const addProduct = () => {
    const nextId = Math.max(...products.map(p => p.id)) + 1;
    setProducts([...products, { ...newProduct, id: nextId }]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setEditProductData({ ...product });
  };

  const saveEdit = () => {
    setProducts(products.map(p => p.id === editingId ? editProductData : p));
    setEditingId(null);
    setEditProductData({});
  };

  const handleEditChange = (field, value) => {
    setEditProductData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {products.map(product => (
        <div key={product.id}>
          {editingId === product.id ? (
            <div>
              <input className="form-control" value={editProductData.name} onChange={e => handleEditChange('name', e.target.value)} />
              <input className="form-control" value={editProductData.description} onChange={e => handleEditChange('description', e.target.value)} />
              <input className="form-control" value={editProductData.image} onChange={e => handleEditChange('image', e.target.value)} />
              <input className="form-control" value={editProductData.price} onChange={e => handleEditChange('price', e.target.value)} />
              <button onClick={saveEdit}>Save</button>
            </div>
          ) : (
            <div>
              <img src={product.image} width="100" alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleEditClick(product)}>Edit</button>
              <button className="float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      <h3>Add Product</h3>
      <input className="form-control" placeholder="Name"
             value={newProduct.name}
             onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input className="form-control" placeholder="Description"
             value={newProduct.description}
             onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input className="form-control" placeholder="Image URL"
             value={newProduct.image}
             onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
      <input className="form-control" placeholder="Price"
             value={newProduct.price}
             onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default AdminPanel;
