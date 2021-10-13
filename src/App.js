import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Routes from './Routes';
import BsStuff from './components/BsStuff';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import Dashboard from './components/Admin/Dashboard';
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
const App = () => {

  
  return (
    <div >
    
        <Routes />
     

    </div>
  );
}

export default App;
