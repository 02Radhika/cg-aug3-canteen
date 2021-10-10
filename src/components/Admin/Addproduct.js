import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",  

  });

  const addQty=(e)=>{

    let menu={
            menuQuntity:e.target.value
        }
    setProduct({...product,menu});
    }
  const { productName, productPrice, productCategory,menu} = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

    const reset = () => {
        setProduct({ productName: ''})
        setProduct({ productPrice: ''})
        setProduct({ productCategory: ''})
        setProduct({menuQuntity:''})
    }
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post( `${base_url}/addProduct`, product);
    history.push("/dashboard");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4 ">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Product"
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
              placeholder="Enter Product Price"
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
              onChange={(e)=>{addQty(e)}}
              required
            />
          </div>
          <button className="btn btn-primary btn-block">Add Menu</button>
          <button className="btn btn-primary btn-block" type="reset"  onClick={reset}>Clear</button>
          <Link className="btn btn-primary btn-block" to="/dashboard">Back to Dashboard</Link>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;