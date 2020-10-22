import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {name,quantity,price,key} = props.product;
    
    return (
        <div className="review-item">
            <p className="product-name">{name}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <button className="add-cart-btn" onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItems;