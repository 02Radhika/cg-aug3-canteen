import React from "react";
import {useState, useEffect } from "react";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from 'react-router-dom';


function Producttable(props){
    
    const [products, setProduct] = useState([]);

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`${base_url}/getAllProduct`);
        setProduct(result.data);
    };

    // const deleteProduct = async productId => {
    //     await axios.delete(`${base_url}/deleteProduct/${productId}`);
    //     loadProduct();
    // };
    const deleteProduct=(productId)=>{

        axios.delete(`${base_url}/deleteProduct/${productId}`).then(
            (Response)=>{
                debugger
                alert("product deleted sucessfully");
                //loadProduct();
                //props.history.push("/dashboard");

                //update(productId);
            },
            (error)=>{
                console.log("error");
            }
        )


        
    };

  return (
        <div className="container">
        <div className="py-4">
            <h1>Welcome Admin</h1>
            <table class="table border shadow">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Category</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{product.productName}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productCategory}</td>
                    <td>
                    <Link class="btn btn-primary mr-2" to={`viewproduct/${product.productId}`}>
                        View
                    </Link>
                    <Link
                        class="btn btn-outline-primary mr-2"
                        to={`Updateproduct/${product.productId}`}
                    >
                        Update
                    </Link>
                    <Link
                        class="btn btn-danger"
                        onClick={()=>{deleteProduct(product.productId);}}
                    >
                        Delete
                    </Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}

export default withRouter(Producttable);