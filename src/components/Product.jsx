

const Product = ({product,cartHandler}) => {
    const{id,name,price,ratings,img,seller}=product
    return (
        <div className="card w-96 bg-base-100 shadow-xl  px-3">
  <figure><img src={img} alt="product image" /></figure>
  <div className="card-body">
    <div>
    <h2 className="card-title">{name}</h2>
    <p>Price:{price}</p>
      </div>
      <div>
        <p>Manufacturer:{seller}</p>
        <p>Rating:{ratings}</p>
      </div>
    <div className="card-actions justify-center">
      <button onClick={()=>cartHandler(product)} className="btn btn-primary bg-orange-100 text-black">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default Product;