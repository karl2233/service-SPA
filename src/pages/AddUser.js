import React from 'react';
import {AddUserApi} from'../apicalls/api';
import { useDispatch } from 'react-redux';
import {HideLoader,ShowLoader} from "../redux/loaderSlice";

function AddUser() {
  const dispatch = useDispatch();

    const [user , setUser] = React.useState({
        firstName:'',
        lastName:'',
        phoneNumber:''
    
    })
    
    const Add = async () =>{
      dispatch(ShowLoader());
        AddUserApi(user);
        
        setTimeout(function() {
          //setUsers(...response);
         dispatch(HideLoader())
         }, 2000);
      }

  return (
    <div className="h-screen bg-primary flex items-center justify-center"> 
    <div className="bg-white shadow-md p-5 flex flex-col gap-3 w-96">
        <h1 className="text-2x1 uppercase">Add User</h1>
        <hr/>

       <input type="text"
        value={user.firstName}
        onChange={(e)=>setUser({...user,firstName:e.target.value})}
        placeholder='Enter your firstname'/>

        <br/>
        <br/>

       <input type="text"
        value={user.lastName}
        onChange={(e)=>setUser({...user,lastName:e.target.value})}
        placeholder='Enter your lastname'/>
          
          <br/>
        <br/>

        <input type="text"
        value={user.phoneNumber}
        onChange={(e)=>setUser({...user,phoneNumber:e.target.value})}
        placeholder='Enter your number'/>

        <br/>
        <br/>

        <button onClick ={Add}className="contained-btn">Login</button>

    

        </div>
    </div>
  );
}

export default AddUser