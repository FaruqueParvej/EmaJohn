import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import './shop.css'
import './product.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from "./MyFakeDb";
import { Link } from "react-router-dom";


const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
    // step-01: get object from local storage
        const storedCart=getShoppingCart();
    // step-02: we let an empty object
        const savedCart = []
    // step-03 we will find product object for matching id with stored data in local storage. if we find after manipulating quantity we will push it to our savedCart array.
        for (const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
           if(addedProduct){
             const quantity = storedCart[id]
            addedProduct.quantity=quantity
            savedCart.push(addedProduct)
           }
    // now we set our cart to savedCart
            setCart(savedCart)
        }
    },[products])
// There is two things, firstly- initially the cart will show the data getting it from local storage. secondly- if we click add to cart ,id will be saved to local storage.But cart won't be changed.so we need to setCart again in the cartHandler.

    const cartHandler=(product)=>{
    // we let a newCart which will consist with local storage data and the product after clicking add to cart button.
        let newCart =[];

// we will find the id either our clicked product is in the cart.
        const exists = cart.find(pd=>pd.id==product.id)
// if product isn't in the cart,we will set the quantity=1 and add the clicked product with the previous cart. 
      if(!exists){
        product.quantity=1;
        newCart =[...cart,product]
      }
// else we will increase the quantity and filter our cart with existing product as we manipulated it.after filtering we will add remaining and existing again. 
      else {
        exists.quantity=exists.quantity+1;
        const remaining = cart.filter(pd=>pd.id!==product.id);
        newCart=[...remaining,exists]
      }
       setCart(newCart);
       addToDb(product.id)
       
    }
    const removeCartHandler = ()=>{
        setCart([])
        deleteShoppingCart()
      }

    return (
        <div className="shop">
        <div className="product">
            {products.map(product=><Product product={product} cartHandler={cartHandler} key={product.id}></Product>)}
        </div>
        <div className="m-5 ">

        <Cart cart={cart} removeCartHandler={removeCartHandler}><Link to='order-review'><button className="btn btn-primary bg-orange-400  text-white w-full" >Review Order</button></Link></Cart>
        </div>
        </div>
        
    );
};

export default Shop;