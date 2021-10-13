import React from 'react';
import {Router} from 'react-router';
import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import  Poster from './components/Poster';

import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import About from './components/About';
import Card from './components/Card';
import BsStuff from './components/BsStuff';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import history from './History';
import Dashboard from './components/Admin/Dashboard';
import Product from './components/Admin/Product';
import Allproduct from './components/Admin/Allproduct';
import Menus from './components/Admin/Menus';
import Addproduct from './components/Admin/Addproduct';
import Updateproduct from './components/Admin/Updateproduct';
import Viewproduct from './components/Admin/Viewproduct';
import Tab from './components/Admin/Tab';
import Creport from './components/Admin/Creport';
import Addstaff from './components/Admin/Addstaff';
import { useState } from 'react';
import Alert from "./components/Alert";
import Oreport from "./components/Admin/Oreport";
//const history=createBrowserHistory(); 
const Routes = () => {

   const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
    return (
        <div>
            <Router history={history}>

                <div>
                    <Navbar title="Buddies Canteen" home="Home" abt="About" login="Login"/>
                    <Alert alert={alert}/>
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/poster"><Poster/></Route>
                            <Route path="/about"> <About /> </Route>
                            {/* <Route exact path="/mainpage"> <Card /> </Route> */}
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/bsstuff"><BsStuff/></Route>
                            <Route path="/Card"><Card/></Route>
                            <Route path="/adminLoginPage"><AdminLoginPage/></Route>
                            <Route path="/dashboard"><Dashboard/></Route>
                            <Route path="/tab"><Tab/></Route>
                            <Route path="/product"><Product/></Route>
                            <Route path='/addproduct'><Addproduct showAlert={showAlert}/></Route>
                            <Route path="/allproduct"><Allproduct/></Route>
                            <Route path="/updateproduct/:productId"><Updateproduct showAlert={showAlert}/></Route>
                            <Route path="/viewproduct/:productId"><Viewproduct showAlert={showAlert}/></Route>
                            <Route path="/creport"><Creport/></Route>
                            <Route path="/oreport"><Oreport/></Route>
                            <Route path="/menu"><Menus/></Route>
                            <Route path="/addstaff"><Addstaff/></Route>
                            <Route path="/*"> <PageNotFound /> </Route>
                        </Switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        </div>
    );
}
export default Routes;