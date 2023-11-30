import { useState } from "react";
import { getShoppingCart } from "./MyFakeDb";


const cartLoader =async()=>{
     const loadedProducts = await fetch("products.json");
     const products = await loadedProducts.json();
    
const savedProducts = getShoppingCart()
let savedCart=[]
for (const id in savedProducts){
    const addedProduct = products.find(pd=>pd.id ===id)
    
    if(addedProduct){
        const quantity=savedProducts[id]
         addedProduct.quantity=quantity;
         savedCart.push(addedProduct);
    }  
}
    return savedCart;
}
export default cartLoader;