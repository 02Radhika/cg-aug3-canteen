import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import base_url from "../../api/Bootapi";

const Viewproduct = () => {
  const [product, setProduct] = useState({
    productId:0,
    productName: "",
    productPrice:0 ,
    productCategory: "",
    menu:"",
    
  });
  const { productId } = useParams();
  //alert(productId);
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const res = await axios.get(`${base_url}/getProductById/${productId}`);
    setProduct(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/dashboard">Back to Dashboard</Link>
      <h1 className="display-4">Product Discription</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Product Id: {product.productId}</li>
        <li className="list-group-item">Product Name: {product.productName}</li>
        <li className="list-group-item">Product Price: {product.productPrice}</li>
        <li className="list-group-item">Product Category: {product.productCategory}</li>
        <li className="list-group-item">Product Menu: {product.menu.menuQuntity}</li>
      </ul>
    </div>
  );
};

export default Viewproduct;