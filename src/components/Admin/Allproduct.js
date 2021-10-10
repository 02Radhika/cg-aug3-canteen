import axios from "axios";
import React ,{useState,useEffect}from "react";
import Product from "./Product";
import base_url from "../../api/Bootapi";

const Allproduct=()=>{

    useEffect(()=>{
        document.title="AllProduct||Buddies Cantenn";
        
    },[]);
    
    const getAllProductsFromServer=()=>{

        axios.get(`${base_url}/getAllProduct`).then(
            (response)=>{
                //console.log(response);
                setProduct(response.data);
                console.log(response.data);
            },
            (error)=>{
                console.log("Error");
            }

        );
    };
   
    useEffect(()=>{
        getAllProductsFromServer();
    },[]);


    const [products,setProduct] = useState([]);

    const updateProduct=(id)=>{
        setProduct(products.filter((c)=>c.productId!=id));
    };
    //console.log(products);

    return(

        <div>
            <h1>All Product</h1>
            <p>List Of Products are as follows</p>
            {
                products.length>0 ? products.map((item)=><Product key={item.Id} product={item} update={updateProduct}/>):"Product Not Found"
            }
        </div>

    );
}
export default Allproduct;