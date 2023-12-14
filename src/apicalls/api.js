import axios from 'axios';


export const AddUserApi = async(user)=>{
    try{
       const response = await axios.post("http://localhost:8082/api/v1/customers/employees",user
        );
        console.log(response);
        const res = response.data.statusString +" "+response.data.countryName+" "+response.data.phoneNumber
         alert(res);
        return response.data;
    }catch(error){
        alert(error.response.data.statusString)
        return error
    }
};

export const getUsers = async()=>{
    try{
       const response = await axios.get("http://localhost:8082/api/v1/customers/employees"
        );
          
       return [response.data];
    }catch(error){
        console.log(error);
        alert(error.response.data)
        return error
    }
}; 

export const UpdateUserApi= async(user)=>{
    try{
       const response = await axios.post("http://localhost:8082/api/v1/customers/employees/update",user
        );
        const res = response.data.statusString +" "+response.data.countryName+" "+response.data.phoneNumber
         alert(res);
        return response.data;
    }catch(error){
        alert(error.response.data.statusString)
        return error
    }
};

export const DeleteUserApi= async(userId)=>{
    try{
       const response = await axios.delete(`http://localhost:8082/api/v1/customers/employees/delete?employeeId=${userId}`
        );
        console.log(response.data);
        alert(response.data.deleteReason)
       //return response.data;
    }catch(error){
        console.log(error);
        alert(error.response.data.deleteReason)
        return error
    }
};