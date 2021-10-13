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
    }, 2000);
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
                            <Route exact path="/home"> <Home /> </Route>
                            <Route exact path="/poster"><Poster/></Route>
                            <Route exact path="/about"> <About /> </Route>
                            {/* <Route exact path="/mainpage"> <Card /> </Route> */}
                            <Route exact path="/register"> <Register /> </Route>
                            <Route exact path="/bsstuff"><BsStuff/></Route>
                            <Route exact path="/Card"><Card/></Route>
                            <Route exact path="/adminLoginPage"><AdminLoginPage/></Route>
                            <Route exact path="/dashboard"><Dashboard/></Route>
                            <Route exact path="/tab"><Tab/></Route>
                            <Route exact path="/product"><Product/></Route>
                            <Route exact path='/addproduct'><Addproduct showAlert={showAlert}/></Route>
                            <Route exact path="/allproduct"><Allproduct/></Route>
                            <Route exact path="/updateproduct/:productId"><Updateproduct showAlert={showAlert}/></Route>
                            <Route exact path="/viewproduct/:productId"><Viewproduct showAlert={showAlert}/></Route>
                            <Route exact path="/creport"><Creport/></Route>
                            <Route exact path="/oreport"><Oreport/></Route>
                            <Route exact path="/menu"><Menus/></Route>
                            <Route exact path="/addstaff"><Addstaff/></Route>
                            <Route exact path="/*"> <PageNotFound /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default Routes;