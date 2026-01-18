 import  {  useContext } from 'react';
import {AppContext} from '../context/AppContext';
import { useNavigate } from "react-router-dom";
 
 const LoginPage = () => {

  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
  return <div onClick={() => {setIsLoggedIn(true); navigate("/dashboard");}} style={{cursor: 'pointer'}}>Login Page</div>;
};

export default LoginPage
