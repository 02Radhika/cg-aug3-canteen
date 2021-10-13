import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
import '../../components/Home.css';

const Updateproduct = (props) => {
  let history = useHistory();
  const { productId } = useParams();
 
  const [product, setProduct] = useState({
    
    productName: "",
    productPrice: "",
    productCategory: "",
    menu:""
  });
  const [productNameErr,setproductNameErr]=useState({});
  const [productPriceErr,setproductPriceErr]=useState({});

  const loadProduct = async () => {
    const result = await axios.get(`${base_url}/getProductById/${productId}`);
    setProduct(result.data);
  }; 

  useEffect(() => {
    loadProduct();
  }, []);
  const { productName, productPrice, productCategory,menu} = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  
  
  const updateQty=(e)=>{

    let menu={
            menuId:product.menu.menuId,
            menuQuntity:e.target.value
        }
    setProduct({...product,menu});
    }

    const handleChange=(e)=>{
      debugger
      let category=product;
      category.productCategory=e.target.value;
      console.log(category);
      setProduct({...category});
    }
  const onSubmit = async e => {
    e.preventDefault();
    const isValid=formValidation();
    if(isValid){
      await axios.put(`${base_url}/updateProduct`, product);
      console.log(product);
      history.push("/dashboard");
      props.showAlert("Product Updated Sucessfully" ,"success");
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
      //setProduct({...product,productName: ''})
      isValid=false;
    }
    if(!productPrice.match(new RegExp(/^[+]?[0-9]+$/))){
      productPriceErr.propricterr="Product Price Should Container Number";
      isValid=false;
    }
    setproductNameErr(productNameErr);
    setproductPriceErr(productPriceErr);
    return isValid;
    
  }
  return (
    <div className="Update container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <div>{Object.keys(productNameErr).map((key)=>{
             return <div style={{color: "red"}}>{productNameErr[key]}</div>
            })}</div>
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
          <div>{Object.keys(productPriceErr).map((key)=>{
            return <div style={{color: "red"}}>{productPriceErr[key]}</div>
          })}</div>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Price"
              name="productPrice"
              value={productPrice}
              onChange={e => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">

              <select value={product.productCategory} className="form-control form-control-lg" onChange={e=>handleChange(e)}>
                <option value="">Click Here</option>           
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
              value={menu && menu.menuQuntity}
              onChange={(e)=>{updateQty(e)}}
              required
            />
          </div>
          
          <button className="btn btn-warning btn-block" data-testid="submit3">Update Product</button>
          <Link className="btn btn-warning btn-block" to="/dashboard">Back to Dashboard</Link>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;