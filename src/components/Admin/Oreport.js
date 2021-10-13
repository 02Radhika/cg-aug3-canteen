import React from "react";
import {useState, useEffect } from "react";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
import axios from "axios";



function Creport(){
    
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        const result = await axios.get(`${base_url}/getAllCustomer`);
        setCustomer(result.data);
        console.log(result.data);
    };

    

  return (
        <div className="container">
        <div className="py-4">
            <h1>Order Report Per Customer </h1>
            <table class="table border shadow">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Order Id</th>
                <th scope="col">Total Price</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Id</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{customer.orders.orders_id}</td>
                    <td>{customer.orders.totalPrice}</td>
                    <td>{customer.orders.status}</td>
                    <td>{customer.orders.date}</td>
                    <td>{customer.cName}</td>
                    <td>{customer.cId}</td>
                    
                </tr>
                ))}
            </tbody>
            </table>
            <Link className="btn btn-primary" to="/dashboard">Back to Dashboard</Link>
        </div>
        </div>
    );
}

export default Creport;