import React from 'react'
import {UpdateUserApi} from   '../apicalls/api'
import {HideLoader,ShowLoader} from "../redux/loaderSlice";
import { useDispatch } from 'react-redux';

function UpdateUser() {
  const dispatch = useDispatch();
  const [user , setUser] = React.useState({
    id:'',
    phoneNumber:''

})



const Update = async () =>{
  dispatch(ShowLoader());
   UpdateUserApi(user);
   setTimeout(function() {
    //setUsers(...response);
   dispatch(HideLoader())
   }, 2000);
  }

return (
<div className="h-screen bg-primary flex items-center justify-center"> 
<div className="bg-white shadow-md p-5 flex flex-col gap-3 w-96">
    <h1 className="text-2x1 uppercase">Update User</h1>
    <hr/>

   <input type="text"
    value={user.id}
    onChange={(e)=>setUser({...user,id:e.target.value})}
    placeholder='Enter your Id'/>

    <br/>
    <br/>

   <input type="text"
    value={user.phoneNumber}
    onChange={(e)=>setUser({...user,phoneNumber:e.target.value})}
    placeholder='Enter your phonenumber'/>
      
    <br>
    </br>

    <br>
    </br>

    <button onClick ={Update}className="contained-btn">Update</button>



    </div>
</div>
);
}

export default UpdateUser