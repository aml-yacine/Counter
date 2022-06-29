import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './product.css';

const Product = ()=>{
    const urlParams = useParams();

    useEffect(()=>{
        getOneProduct();
    },[])

    const getOneProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    const [product , setProduct] = useState({})
return <div className=" w-50 m-auto mt-5">
    <div className="product_card border shadow p-5 justify-content-between row">
        <div className="product_img col-md-5">
            <img className="w-100" src={product.image} alt="product img" />
        </div>
        <div className="product_desc col-md-6">
        <h2>{product.title}</h2>
        <span className="text-primary">{product.price} $</span>
        <p className="my-3">{product.description}</p>
        <button className="btn btn-outline-primary">shop now</button>

        </div>
    </div>
</div>

}
export default Product;