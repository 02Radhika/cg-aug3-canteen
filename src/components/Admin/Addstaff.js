import React  ,{ useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import base_url from "../../api/Bootapi";
import { Link } from "react-router-dom";



function Addstaff(){
    let history = useHistory();
  const [staff, setStaff] = useState({
    staffName: "",
    staffGender: "",
    staffPhone: 0,
    staffCity:"",
    staffUsername:""

  });

//   const addQty=(e)=>{

//     let menu={
//             menuQuntity:e.target.value
//         }
//     setProduct({...product,menu});
//     }
  const { staffName, staffGender, staffPhone,staffCity,staffUsername} = staff;
  const onInputChange = e => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

    const reset = () => {
        setStaff({ staffName: ''})
        setStaff({ staffGender: ''})
        setStaff({ staffPhone: ''})
        setStaff({ staffCity:''})
        setStaff({ staffUsername:''})
    }
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post( `${base_url}/addStaff`, staff);
    history.push("/dashboard");
  };
    return(

        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4 ">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Staff Name"
              name="staffName"
              value={staffName}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <div onChange={e => onInputChange(e)}>
                <input type="radio" value="Male" name="gender"/>Male
                <br/>
                <input type="radio" value="Female" name="gender" /> Female
            </div>
          </div>
          
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Staff Phone"
              name="staffPhone"
              value={staffPhone}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          
          {/* <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Staff Phone"
              name="staffPhone"
              value={staffPhone}
              onChange={e => onInputChange(e)}
              required
            />
          </div> */}
          <button className="btn btn-primary btn-block">Add Staff</button>
          <button className="btn btn-primary btn-block" type="reset"  onClick={reset}>Clear</button>
          <Link className="btn btn-primary btn-block" to="/dashboard">Back to Dashboard</Link>
        </form>
      </div>
    </div>
    );
}

export default Addstaff;
