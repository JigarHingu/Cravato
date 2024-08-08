import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);

  // Function to calculate total count of items
  const getTotalItemCount = () => {
    return Object.values(cartItems).reduce((acc, count) => acc + count, 0);
  };

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
        <input type='text' placeholder='Country' />
          <input type='text' placeholder='Pin Code' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub-total</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total Items</p>
              <p>{getTotalItemCount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>$ {getTotalCartAmount()}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
