import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './store.css';

const Store = () => {
    const [product , setProduct] = useState([ ]); 
    
    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    return (
        product.length > 0 ?
        <div className="product_container mt-5 text-center d-flex justify-content-center flex-wrap">
       {
           product.map((item,index) =>{
               return <div  key={index} className="border col-md-4 w-25 m-3 ">
                   <Link to={`/product/${item.id}`}>
                   <div className="product_card text-center p-4">
                      <div className=" w-50 h-50">
                      <img className="w-100 h-100" src={item.image} alt="" />
                      </div>
                       <h6 className="text-dark my-3">{item.title}</h6>
                       <p className="mt-3">{item.price}$</p>
                       <button className="btn btn-primary my-3">Show Details</button>
                   </div>
               </Link>
               </div>
           })
       }
   </div>
       :
       <h5 className="text-center my-5">LOADING ...</h5>
      ) 
}
export default Store;

