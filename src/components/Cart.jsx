import { useState } from "react";
import { deleteShoppingCart } from "./MyFakeDb";

const Cart = ({cart,removeCartHandler,children}) => {
    let quantity = 0
    let total=0;
    let totalShipping =0;
    for (const product of cart){
        quantity =  quantity + product.quantity
        total=total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
    }
    const tax = total*7/100;
    const grandtotal = total+totalShipping+tax;
    

    return (
        <div className="bg-orange-200 p-5 h-96 sticky top-0 ">
            <h2>Order Summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping Charge:{totalShipping}</p>
            <p>Tax:{tax}</p>
            <h1>Grand Total:{grandtotal}</h1>
            <div className="flex flex-col">
            <button className="btn btn-primary my-2 bg-red-500 text-white" onClick={removeCartHandler}>Clear Cart</button>
            {children}
            </div>
            
        </div>
    );
};

export default Cart;