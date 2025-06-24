import React, { useContext, useState } from 'react';
import { ProductContext } from '../components/MobileContext/ProductContext';

const AdminPanel = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [editingId, setEditingId] = useState(null);
  const [editProductData, setEditProductData] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);

  const addProduct = () => {
    const nextId = Math.max(...products.map(p => p.id)) + 1;
    setProducts([...products, { ...newProduct, id: nextId }]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
    setShowAddForm(false); // Hide form after adding
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

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  };

  const formControl = {
    padding: '8px',
    margin: '5px 0',
    width: '100%',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const button = {
    padding: '8px 16px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const saveBtn = { ...button, backgroundColor: '#28a745', color: 'white' };
  const editBtn = { ...button, backgroundColor: '#007bff', color: 'white' };
  const deleteBtn = { ...button, backgroundColor: '#dc3545', color: 'white' };
  const addBtn = { ...button, backgroundColor: '#17a2b8', color: 'white' };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>

      <h3>Add Product</h3>
      <button style={addBtn} onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add Product"}
      </button>

      {showAddForm && (
        <div style={cardStyle}>
          <div style={{ flex: 1 }}>
            <input className="form-control" style={formControl} placeholder="Name"
              value={newProduct.name}
              onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input className="form-control" style={formControl} placeholder="Description"
              value={newProduct.description}
              onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
            <input className="form-control" style={formControl} placeholder="Image URL"
              value={newProduct.image}
              onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
            <input className="form-control" style={formControl} placeholder="Price"
              value={newProduct.price}
              onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
            <button className="form-control" style={saveBtn} onClick={addProduct}>Save Product</button>
          </div>
        </div>
      )}

      {products.map(product => (
        <div key={product.id} style={cardStyle}>
          <img src={product.image} width="100" alt={product.name} />
          <div style={{ flex: 1 }}>
            {editingId === product.id ? (
              <>
                <input className="form-control" style={formControl} value={editProductData.name} onChange={e => handleEditChange('name', e.target.value)} />
                <input className="form-control" style={formControl} value={editProductData.description} onChange={e => handleEditChange('description', e.target.value)} />
                <input className="form-control" style={formControl} value={editProductData.image} onChange={e => handleEditChange('image', e.target.value)} />
                <input className="form-control" style={formControl} value={editProductData.price} onChange={e => handleEditChange('price', e.target.value)} />
                <button className="float-right" style={saveBtn} onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button style={editBtn} onClick={() => handleEditClick(product)}>Edit</button>
                <button className="float-right" style={deleteBtn} data-cy={`delete-btn-${product.id}`} onClick={() => deleteProduct(product.id)}>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}

      


    </div>
  );
};

export default AdminPanel;
