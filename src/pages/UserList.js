import {React ,useEffect} from 'react';
import {getUsers} from'../apicalls/api';

import {HideLoader,ShowLoader} from "../redux/loaderSlice";
import { useDispatch, useSelector } from 'react-redux';
import {SetAllUSers} from '../redux/userSlice';


function UserList({ searchKey }) {
const dispatch = useDispatch();
const {allUsers} = useSelector(state=>state.userReducer);


useEffect(()=>{
    const asyncFn = async () => {  
        dispatch(ShowLoader());
        const response =await getUsers();
        setTimeout(function() {
                     
                    dispatch(HideLoader())
                    dispatch(SetAllUSers(...response)); }, 2000);
        console.log()
    };
        asyncFn();
    
},[dispatch])

   

    return (
        <div className="flex flex-col gap-3 mt-5">
            
      
            <ul>
            {allUsers.map(item =>
            <li key="{item.id}"> {item.id} {item.firstName}  {item.lastName} {item.phoneNumber}</li>
            
            )}
            </ul>

     </div>
      );

}

export default UserList