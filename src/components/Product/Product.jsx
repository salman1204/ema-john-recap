import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
//   console.log(props);

  const { name, img, stock, price, seller } = props.product;
  return (
    <div className="product">
      
      <div className="product-img">
        <img src={img} alt="Product_Image" />
      </div>
      
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p><small>By: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - order now</small></p>
        <button className="add-cart-btn" onClick={()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
      </div>

    </div>
  );
};

export default Product;
