const addToDb = (id)=>{
    // before adding any id to local storage we have to check either any id is in local storage.thats why we call the following function
   let shoppingCart=getShoppingCart();
//    after function call we get empty object or object with data in local storage. let the the key of the id as quantity.
   const quantity = shoppingCart[id]
//   now we add key(quantity) in the object
   if(!quantity){
    shoppingCart[id]=1
   }
//    if key(quantity) exist we will increase the number of key(quantity)
   else {
   const newQuantity =  quantity + 1;
    shoppingCart[id]= newQuantity;
   }
//    Now we have object with added id. we will set the item in the local storage as string.
   localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeFromDb =(id)=>{
    // firstly we call the following function to get the stored object.
    const shoppingCart = getShoppingCart();
    // if we our id is in the shopping cart delete operation will be occured and we will set this changed object in local storage.Obviously after stringify
    if (id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
    }
}

const getShoppingCart =()=>{
    let shoppingCart={}
    // get shopping cart from the local storage
    const storedCart = localStorage.getItem('shopping-cart');
    // data saved at local storage as string,if we get data then we have to make it as JSON object. if we don't get data we return empty object
    if (storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDb,removeFromDb,deleteShoppingCart,getShoppingCart}