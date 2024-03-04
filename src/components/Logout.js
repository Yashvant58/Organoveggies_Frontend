import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../App";
function Logout(prop) {
    const {dispatch}=useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`${prop.baseUrl}/logout`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            mode:"cors",
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
navigate('/signin',{replace:true});
 alert("Log-out successfully")
if(!res.status===200){
const error=new Error(res.error);
throw error;
}
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
<h1>you are log-out plz log-in first</h1>

  )
}

export default Logout