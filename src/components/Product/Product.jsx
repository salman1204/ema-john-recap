import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.product);

  const { name, img, stock, price, seller, key } = props.product;
  return (
    <div className="product">
      
      <div className="product-img">
        <img src={img} alt="Product_Image" />
      </div>
      
      <div className="product-info">
        <p className="product-name"> <Link to={"/product/"+key}>{name}</Link></p>
        <p><small>By: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - order now</small></p>
        { props.showAddToCart  && <button className="add-cart-btn" onClick={()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
      </div>

    </div>
  );
};

export default Product;
