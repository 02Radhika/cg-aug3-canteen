import React from "react";
import {useState, useEffect } from "react";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../components/Home.css';


function Oreport(){
    
    const [staffs, setStaff] = useState([]);

    useEffect(() => {
        loadStaff();
    }, []);

    const loadStaff = async () => {
        const result = await axios.get(`${base_url}/getAllStaff`);
        setStaff(result.data);
    };

    

  return (
        <div className="Oreport container">
        <div className="py-4">
            <h1>Staff Info</h1>
            <table class="table border shadow">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Staff Name</th>
                <th scope="col">Staff Address</th>
                <th scope="col">Staff City</th>
                <th scope="col">Staff Gender</th>
                <th scope="col">Staff Phone</th>
                <th scope="col">Staff Username</th>
                </tr>
            </thead>
            <tbody>
                {staffs.map((staff, index) => (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{staff.staffName}</td>
                    <td>{staff.staffAddress}</td>
                    <td>{staff.staffCity}</td>
                    <td>{staff.staffGender}</td>
                    <td>{staff.staffPhone}</td>
                    <td>{staff.staffUsername}</td>
                    
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