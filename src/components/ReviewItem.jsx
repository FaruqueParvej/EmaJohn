import { useEffect, useState } from "react";
import Cart from "./Cart";
import './shop.css'
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "./reviewCard";
import { removeFromDb } from "./MyFakeDb";


const ReviewItem = () => {
   const savedCart=useLoaderData();
const [cart,setCart]=useState(savedCart)
   
const deleteCartHandler=(id)=>{
  console.log(id);
  const remaining = cart.filter(pd=>pd.id !== id)
  setCart(remaining)
  removeFromDb(id)
}
const removeCartHandler = ()=>{
  setCart([])
  deleteShoppingCart()
}

   console.log(cart);
   

    return (
        <div className="shop">
          <div>
          {cart.map(pd=><ReviewCard product={pd} deleteCartHandler={deleteCartHandler} key={pd.id}></ReviewCard>)}
            </div>
       
<Cart cart={cart} removeCartHandler={removeCartHandler}><Link to='/checkout'><button className="btn btn-primary bg-orange-400 text-white w-full" >Proceed checkout</button></Link></Cart>
        </div>
    );
};

export default ReviewItem;