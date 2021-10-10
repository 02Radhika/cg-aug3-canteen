import React from 'react';
import { withRouter } from 'react-router-dom';
import Poster from '../Poster';
import Tab from '../Admin/Tab';
import Menus from './Menus';
import Producttable from './Producttable';

 

function Dashboard(props) {
  
 
  // handle click event of logout button
  const handleLogout = () => {
  
    props.history.push('/adminloginpage');
  }

  return (
        <div>
          <Poster/>
          <Tab/>
          <Producttable/>
          <input type="button" onClick={handleLogout} value="Logout" />
      </div>
  
  );
}
 
export default withRouter(Dashboard);