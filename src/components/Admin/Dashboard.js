import React from 'react';
import { withRouter } from 'react-router-dom';
import Poster from '../Poster';
import Tab from '../Admin/Tab';
import Menus from './Menus';
import Producttable from './Producttable';
import '../../components/Home.css';
 

function Dashboard(props) {
  
 
  // handle click event of logout button
  const handleLogout = () => {
  
    props.history.push('/adminloginpage');
  }

  return (
        <div className="Admin">
          <Poster/>
          <Tab/>
          <Producttable/>
          {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      </div>
  
  );
}
 
export default withRouter(Dashboard);