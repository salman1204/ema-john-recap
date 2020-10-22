import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const productTotal = cart.reduce((total, item)=> total +item.price * item.quantity,0)
    let shipping = 0;
    
    if (productTotal>35) {
        shipping = 0;
    }
    else if (productTotal>15){
        shipping = 10;
    }
    else if (productTotal>0){
        shipping = 12;
    }

    const tax = Number((productTotal * .1).toFixed(2));
    const grandTotal = Number((productTotal + shipping + tax).toFixed(2));

    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items orderd: {cart.length}</p>
            <p>Product Price: {productTotal} </p>
            <p>Shipping Cost: {shipping} </p>
            <p>Tax & VAT: {tax} </p>
            <h4>Total: {grandTotal} </h4>
            {props.children}
        </div>
    );
};

export default Cart;