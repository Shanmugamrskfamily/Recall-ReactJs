// CustomerList.js
import React, { useReducer, useState } from 'react';

const initialState = {
  customers: [],
};

const customerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { customers: [...state.customers, { id: Date.now(), ...action.payload }] };
    case 'EDIT_CUSTOMER':
      return {
        customers: state.customers.map(customer =>
          customer.id === action.payload.id ? { ...customer, ...action.payload } : customer
        ),
      };
    case 'DELETE_CUSTOMER':
      return { customers: state.customers.filter(customer => customer.id !== action.payload) };
    default:
      return state;
  }
};

const CustomerList = () => {
  const [state, dispatch] = useReducer(customerReducer, initialState);
  const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '' });
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  const handleAddCustomer = () => {
    if (customerData.name.trim() !== '' && customerData.email.trim() !== '' && customerData.phone.trim() !== '') {
      if (editingCustomerId) {
        dispatch({ type: 'EDIT_CUSTOMER', payload: { id: editingCustomerId, ...customerData } });
        setEditingCustomerId(null);
      } else {
        dispatch({ type: 'ADD_CUSTOMER', payload: customerData });
      }
      setCustomerData({ name: '', email: '', phone: '' });
    }
  };

  const handleEditCustomer = (customer) => {
    setEditingCustomerId(customer.id);
    setCustomerData({ name: customer.name, email: customer.email, phone: customer.phone });
  };

  const handleDeleteCustomer = (customerId) => {
    dispatch({ type: 'DELETE_CUSTOMER', payload: customerId });
  };

  return (
    <div className="customer-list-container">
      <h1>B2B Customer Management</h1>
      <div className="customer-form">
        <input
          type="text"
          placeholder="Name"
          value={customerData.name}
          onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={customerData.email}
          onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={customerData.phone}
          onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
        />
        <button onClick={handleAddCustomer}>{editingCustomerId ? 'Edit Customer' : 'Add Customer'}</button>
      </div>
      <ul className="customer-list">
        {state.customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.phone}
            <span style={{alignItems:'end'}}>
            <button className="edit-button" onClick={() => handleEditCustomer(customer)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => handleDeleteCustomer(customer.id)}>
              Delete
            </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;