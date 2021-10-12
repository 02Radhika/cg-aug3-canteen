import React ,{useState,useEffect }from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



const Navbar=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (isLoggedIn); // use localStorage here 
        setIsLoggedIn(false);
    }, []);

    if(isLoggedIn) {
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid ">
                <Link a className="navbar-brand" to="#" color="bg">Buddies Canteen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page">Logout</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
    );
    }
    else{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid ">
                <Link a className="navbar-brand" to="#" color="bg">Buddies Canteen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page"  to="/Card">Login</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;