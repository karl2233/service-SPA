import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UpdateUser from './pages/UpdateUser';
import AddUser from './pages/AddUser';
import UserList from './pages/UserList';
import DeleteUser from './pages/DeleteUser';
import Loader from './components/Loader';
import {useSelector} from "react-redux";
function App() {
  const {loader} = useSelector(state => state.loaderReducer)
  return (
    <div>
    {loader && <Loader/>}
    <BrowserRouter>
     <Routes>
      <Route path="/Add" element={<AddUser/>}/>
      <Route path="/Update" element={<UpdateUser/>}/>
      <Route path="/Users" element={<UserList/>}/>
      <Route path="/Delete" element={<DeleteUser/>}/>
     </Routes>
     </BrowserRouter>  
     </div>   
  );
}

export default App;
