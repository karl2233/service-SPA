import React from 'react'
import {DeleteUserApi} from '../apicalls/api'
import {HideLoader,ShowLoader} from "../redux/loaderSlice";
import { useDispatch } from 'react-redux';

function DeleteUser() {
  const dispatch = useDispatch();
  const [user , setUser] = React.useState({
    id:'',

})



const Delete = async () =>{
  dispatch(ShowLoader());
  DeleteUserApi(user.id);
   setTimeout(function() {
    //setUsers(...response);
   dispatch(HideLoader())
   }, 2000);
  }

return (
<div className="h-screen bg-primary flex items-center justify-center"> 
<div className="bg-white shadow-md p-5 flex flex-col gap-3 w-96">
    <h1 className="text-2x1 uppercase">Delete User</h1>
    <hr/>

   <input type="text"
    value={user.id}
    onChange={(e)=>setUser({...user,id:e.target.value})}
    placeholder='Enter your Id'/>


      
    <br>
    </br>

    <br>
    </br>

    <button onClick ={Delete}className="contained-btn">Delete</button>



    </div>
</div>
);
}

export default DeleteUser