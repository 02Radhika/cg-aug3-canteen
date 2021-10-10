import React from 'react';
import Admin from '../assets/images/Admin.jpg'
import Customer from '../assets/images/Customer.png'
import Staff from '../assets/images/Staff.png'
import { Link } from 'react-router-dom';

const Card=()=>{
    return(

        <div className="container "style={{ marginTop: '1rem' }} >
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Admin} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Admin Module</h5>
                            <p className="card-text">This Module is for Admin Person.Only authorized person can Login</p>
                            <Link className="btn btn-primary" to="/adminLoginPage" >Go To Administration</Link>
                        </div>
                    </div>
                </div>



                <div className="col-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Staff} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Staff Module</h5>
                            <p className="card-text">This Module is for Staff Person.Only authorized person can Login</p>
                            <a href="#" className="btn btn-primary">Go To Staff</a>
                        </div>
                    </div>
                </div>


                <div className="col-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={Customer} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Customer Module </h5>
                            <p className="card-text">This Module is for All Customer Login To Our App and Enjoy our Meal</p>
                            <a href="#" className="btn btn-primary">Go To Customer</a>
                        </div>
                    </div>
                </div>  




            </div>
                
        </div>
    );
}

export default Card;