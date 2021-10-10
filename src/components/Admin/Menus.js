import React from "react";
import { Link } from 'react-router-dom';

const Menus=()=>{

    return(
        <ul class="list-group">
            <Link className="list-group-item" to="/allproduct">All Product</Link>
            <Link className="list-group-item" to="/addproduct">Add Product</Link>
            {/* <Link class="list-group-item" to="/updateproduct">Update Product</Link> */}
            <li class="list-group-item">Get Product By Catogory</li>
            <li class="list-group-item"></li>
        </ul>
    );
}

export default Menus;
