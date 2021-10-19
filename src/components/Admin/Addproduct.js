import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import base_url from "../../api/Bootapi";
//import { Link } from "react-router-dom";
import '../../components/Home.css';

const AddProduct = (props) => {
  let history = useHistory();

  
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",  

  });

  const [productNameErr,setproductNameErr]=useState({});
  const [productPriceErr,setproductPriceErr]=useState({});
  

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
  

  const handleChange=(e)=>{
    debugger
    let category=product;
    category.productCategory=e.target.value;
    console.log(category);
    setProduct({...category});
  }

    const reset = () => {
        setProduct({ productName: ''})
        setProduct({ productPrice: ''})
        setProduct({ productCategory: ''})
        setProduct({menuQuntity:''})
    }
  const onSubmit = async e => {
    e.preventDefault();
    const isValid =formValidation();
    if(isValid){
      await axios.post( `${base_url}/addProduct`, product);
      history.push("/dashboard");
      props.showAlert("Product Added Sucessfully" ,"success");
    }
  };

  const formValidation=()=>{
    const productNameErr={};
    const productPriceErr={};
    let isValid=true;
    //var namePattern = new RegExp(/^[a-zA-Z ]+$/);
    debugger
    if(!productName.match(new RegExp(/^[a-zA-Z ]+$/))){
      productNameErr.productrejex="Product Name Should Container Character";
      setProduct({...product,productName: ''})
      isValid=false;
    }
    if(!productPrice.match(new RegExp(/^[+]?[0-9]+$/))){
      productPriceErr.propricterr="Product Price Should Container Number";
      setProduct({...product,productPrice: ''})
      isValid=false;
    }
    setproductNameErr(productNameErr);
    setproductPriceErr(productPriceErr);
    return isValid;
    
  }


  return (
    <div className="Addproduct container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4" style={{ color: 'white' }}>Add Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <div>{Object.keys(productNameErr).map((key)=>{
             return <div style={{color: "red"}}>{productNameErr[key]}</div>
            })}</div>
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
          <div>{Object.keys(productPriceErr).map((key)=>{
            return <div style={{color: "red"}}>{productPriceErr[key]}</div>
          })}</div>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="productPrice"
              value={productPrice}
              onChange={e => onInputChange(e)}
              required
            />
            
          </div>
          
          <div className="form-group">
              <select value={product.productCategory} className="form-control form-control-lg" onChange={e=>handleChange(e)}>
                <option value=""></option>           
                <option value="Snacks">Snacks</option>
                <option value="Beverages">Beverages</option>
              </select>
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
          <button className="btn btn-primary btn-block" data-testid="submit1">Add Menu</button>
          <button className="btn btn-primary btn-block" type="reset"  onClick={reset}>Clear</button>
          {/* <Link className="btn btn-primary btn-block" to="/dashboard">Back to Dashboard</Link> */}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;