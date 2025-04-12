import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ itemData }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCartItem(itemData._id));
  };

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value, 10);
    if (newQty >= 1) {
      dispatch(updateCartItem({ itemId: itemData._id, quantity: newQty }));
    }
  };

  return (
    <div className="cart-item">
      <img src={itemData.image} alt={itemData.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{itemData.name}</h4>
        <p>Price: ${itemData.price}</p>
        <div className="quantity-control">
          <label htmlFor={`qty-${itemData._id}`}>Qty:</label>
          <input
            type="number"
            id={`qty-${itemData._id}`}
            value={itemData.quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button onClick={handleRemove} className="btn-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  itemData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
