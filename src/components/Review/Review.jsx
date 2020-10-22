import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'
// import processOrder from '../../utilities/databaseManager'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)
    
    let thankyou;
    if (orderPlaced){
        thankyou = <img src={happyImage}></img>
    } 
    
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) => {
        // console.log("remove Items", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const ProductKeys = Object.keys(savedCart)
        
        const cartProducts = ProductKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])

    return (
        <div className="shop-container">
        <div className="product-container">
            { 
                cart.map(pd => <ReviewItems product = {pd} key={pd.key} removeProduct = {removeProduct} ></ReviewItems>)
            }
            {
                thankyou
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
            <button onClick= {handlePlaceOrder} className="add-cart-btn">Place Order</button>
            </Cart>
        </div>
        </div>
       
    );
};

export default Review;