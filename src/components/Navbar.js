import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


 
const Navbar=(props)=>{
    return(
     
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid ">
                <Link a className="navbar-brand" to="#" color="bg">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                    </li>
                </ul>
 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/about">{props.abt}</Link>
                    </li>
                </ul>
 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/Card">{props.login}</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
            
    );
 
}
 
export default Navbar;