import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function Appio() {
  const [inventory, setInventory] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  useEffect(() => {
    // Fetch inventory data from server
    fetch('http://localhost:5000/inventory')
      .then(response => response.json())
      .then(data => setInventory(data));

    // Listen for updates from server
    socket.on('update', data => setInventory(data));

    // Clean up function to disconnect from socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleAddItem = () => {
    const newItem = {
      name: newItemName,
      quantity: newItemQuantity
    };

    // Send new item data to server to be added to inventory
    fetch('http://localhost:5000/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    });

    // Clear input fields and update inventory state
    setNewItemName('');
    setNewItemQuantity('');
  };

  const handleDeleteItem = id => {
    // Send delete request to server for specified item ID
    fetch(`http://localhost:5000/inventory/${id}`, { method: 'DELETE' });
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Item</h2>
      <label>
        Name:
        <input
          type="text"
          value={newItemName}
          onChange={event => setNewItemName(event.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={newItemQuantity}
          onChange={event => setNewItemQuantity(event.target.value)}
        />
      </label>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default Appio;
