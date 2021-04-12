import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    //const total=cart.reduce((total,crs)=>total+crs.price,0);
    let total=[];
    for(let i=0;i<cart.length;i++){
        const crs=cart[i];
        total=total + ' ' + '+'+ crs.price;
        
    }
    return (
        <div className="price">
            <h2>Enrole courses</h2>
            <h3>Buy courses:{cart.length}</h3>
            <h3> prices of each courses: {total}</h3>
        </div>
    );
};

export default Cart;