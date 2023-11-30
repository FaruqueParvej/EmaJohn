

const ReviewCard = ( {product,deleteCartHandler}) => {
    const{id,name,price,ratings,img,seller,quantity}=product
   
 
    return (
        <div>
           <div className="card card-side bg-base-100 shadow-xl m-4 flex items-center p-2">
<figure className="w-48"><img src={img} alt="image"/></figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>Price:<span className="text-orange-500">${price}</span></p>
  <p>Order Quantity:<span className="text-orange-500">{quantity}</span></p>
  
</div>
<div className="card-actions justify-end">
    <button className="btn btn-warning" onClick={()=>deleteCartHandler(id)}>Delete</button>
  </div>
</div> 
        </div>
    );
};

export default ReviewCard;