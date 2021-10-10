import axios from "axios";
import React  from "react";
import base_url from "../../api/Bootapi";
import { Link } from 'react-router-dom';


const Product=({product,update})=>{

    const deleteProduct=(productId)=>{
        axios.delete(`${base_url}/deleteProduct/${productId}`).then(
            (Response)=>{
                alert("product deleted sucessfully");
                update(productId);
            },
            (error)=>{
                console.log("error");
            }
        )
    };
    
    return(
            <div class="card" style={{width: '18rem'}}>
                <img src="..." class="card-img-top" alt="Image Not Found"/>
                <div class="card-body">
                <h5 class="card-title">{product.productId}</h5>
                <h5 class="card-text">{product.productName}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price={product.productPrice}</li>
                    <li class="list-group-item">Quantity={product.menu.menuQuntity}</li>
                    <li class="list-group-item">Category={product.productCategory}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-danger" onClick={()=>{deleteProduct(product.productId);}}>Delete</button>
                    <Link class="btn btn-warning ml-3" button type="button"  to={`Updateproduct/${product.productId}`}>Update</Link>
                </div>
            </div>
);
}

export default Product;

