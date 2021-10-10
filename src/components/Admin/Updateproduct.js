import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";

const Updateproduct = () => {
  let history = useHistory();
  const { productId } = useParams();
  //alert(productId);
  const [product, setProduct] = useState({
    //productId:"" ,
    productName: "",
    productPrice: 0,
    productCategory: "",
  });

  
  const { productName, productPrice, productCategory} = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`${base_url}/updateProduct`, product);
    history.push("/dashboard");
  };

  const loadProduct = async () => {
    const result = await axios.get(`${base_url}/getProductById/${productId}`);
    setProduct(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="productName"
              value={productName}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Product Price"
              name="productPrice"
              value={productPrice}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
          <label>
            <input list="products" name="productCategory" value={productCategory}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product Category"

              onChange={e => onInputChange(e)}
              required
            /></label>
            <datalist id="products">
                        <option value="Snacks"/>
                        <option value="Beverages"/>       
            </datalist>
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Menu Quantity"
              name="menu"
              //value={menu}
              //onChange={(e)=>{addQty(e)}}
              required
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update Product</button>
          <Link className="btn btn-warning btn-block" to="/dashboard">Back to Dashboard</Link>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Updateproduct);