import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './store.css';

const Store = () => {
    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    const [product , setProduct] = useState([ ]); 
    console.log("product ",product)
    
    
    

    
    return <div className="product_container mt-5 text-center d-flex justify-content-center flex-wrap">
      
        {
            product.map((item,index) =>{
                return <div className="border col-md-4 w-25 m-3 ">
                    <Link to={`/product/${item.id}`} key={index}>
                    <div className="product_card text-center p-4">
                       <div className="bg-info w-50 h-50">
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
}
export default Store;