import  axios  from 'axios';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import base_url from "../../api/Bootapi";



  function AdminLoginPage(props) {
    const [loading, setLoading] = useState(false);
    const adminUsername = useFormInput('');
    const adminPassword = useFormInput('');
    const [error, setError] = useState(null);
   
    // handle button click of login form
    const handleLogin = () => {
      setError(null);
      setLoading(true);

      
      const params = { adminUsername: adminUsername.value, adminPassword: adminPassword.value };

    axios.post(`${base_url}/loginAdmin`, { adminUsername: adminUsername.value, adminPassword: adminPassword.value }).then(response => {
      setLoading(false);
      //this.setState(response.data);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
       if (error.response.status === 401) setError(error.response.data.message);
       else setError("Something went wrong. Please try again later.");
    });

    }
  
  return (
    
    <div className="container">
      <div className="form-control form-control-lg">
      <h2 className="text-center mb-4 ">Admin Login</h2>
          <form>
            <div className="form-group">
              <input
                type="text" {...adminUsername}
                className="form-control form-control-lg"
                placeholder="Enter Admin UserName"
              />
            </div>

            <div className="form-group">
              <input
                type="password" {...adminPassword}
                className="form-control form-control-lg"
                placeholder="Enter Admin Password"
              />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <button className="btn btn-primary btn-block" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >Login</button>
          </form>
      </div>
    </div>
    
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}


export default withRouter(AdminLoginPage);


//   const options = {
    //     headers: {
    //       'Accept': "application/json, text/plain, */*",
    //       'Content-Type': "application/json;charset=utf-8"
    //   },
    //     method: 'POST',
    //     body: JSON.stringify( params )  
    // };
    
  
    // fetch( `${base_url}/loginAdmin`, options )
    //     .then( response => response.json() )
    //     .then( response => {
    //         console.log(response);
    //         props.history.push('/dashboard');
    //     } );