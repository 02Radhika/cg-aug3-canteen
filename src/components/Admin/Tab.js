import React  from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Tab() {

    let history = useHistory();

    const handleLogout = (props) => {
  
        history.push('/adminloginpage');
      }
    
    return(
        <ul className="nav justify-content-center bg-info">
            <li className="nav-item">
                <Link className="nav-link active text-light bg-dark mx-1" aria-current="page" to="/addproduct">Add Product</Link>
            </li>
            
            <li className="nav-item ">
                <Link className="nav-link text-light bg-dark mx-1" to="/creport" >Customer Report</Link>
            </li>

            <li className="nav-item ">
                <Link className="nav-link text-light bg-dark mx-1" to="/oreport" >Order Details Report</Link>
            </li>

            <li className="nav-item ">
                <Link className="nav-link text-light bg-dark mx-1" to="/creport" >Total Sales</Link>
            </li>

            <li className="nav-item">
                <a className="nav-link text-light bg-dark mx-1" onClick={handleLogout}>Logout</a>
                {/* <input type="button" onClick={handleLogout} value="Logout"/> */}
            </li>
            <li className="nav-item">
                <a className="nav-link disabled "></a>
            </li>
        </ul>
    );
}

export default  withRouter(Tab);