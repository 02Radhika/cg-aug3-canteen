import React from "react";
import {useState, useEffect } from "react";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
import axios from "axios";



function Oreport(){
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const result = await axios.get(`${base_url}/getAllCustomer`);
        setCustomer(result.data);
    };

    

  return (
        <div className="container">
        <div className="py-4">
            <h1>Customer Report</h1>
            <table class="table border shadow">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Address</th>
                <th scope="col">Customer City</th>
                <th scope="col">Customer Gender</th>
                <th scope="col">Customer Phone</th>
                <th scope="col">Customer Username</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{customer.cName}</td>
                    <td>{customer.cAddress}</td>
                    <td>{customer.cCity}</td>
                    <td>{customer.cGender}</td>
                    <td>{customer.cPhone}</td>
                    <td>{customer.cUsername}</td>
                    
                </tr>
                ))}
            </tbody>
            </table>
            <Link className="btn btn-primary" to="/dashboard">Back to Dashboard</Link>
        </div>
        </div>
    );
}

export default Oreport;