import {React,useState,useContext} from 'react'
import {Link} from "react-router-dom";
import {UserContext} from "../App"
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Login=(prop)=>{
const {dispatch} = useContext(UserContext);
const [ispassword, setIspassword] = useState(true);
 
const handleClick = event => {
  setIspassword(current => !current);
};

  const navigate=useNavigate();
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const loginUser=async(e)=>{
  e.preventDefault();
  const response=await fetch(`${prop.baseUrl}/signin`,{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
mode:"cors",
credentials:"include",
body:JSON.stringify({
  email,password
})
  });
  const data=await response.json();
  if(data.status===400||!data){
    window.alert("Invalid Credentials");
  }else{
    dispatch({type:"USER",payload:true})
    window.alert("Login successfully");
    navigate("/");
  }
}
  return (
 <> 
<section id="login" className="section-p1">
    <div className="login-container">
        <p id="alert"></p>
        <form method="POST"  className="form" id="login-form">
            <h2 className="form-title">Login</h2>
           
            <div className="form-input-group">
                <input type="text" id="userLogin" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='Your Email'  className="form-input" autoFocus required/>
            </div>

            <div className="form-input-group">
                <input type={ispassword? "password":"text"}  id="userPw" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='Password'  className="form-input" autoFocus required/>
                <input type="checkbox" onClick={handleClick} id="showPw" /><span style={{fontSize:"15px",margin: "10px"}}>Show Password</span> 
              </div>
              <div className="form-input-group"> 
                <button className="btn" type="submit"name="signin" id="signin"  onClick={loginUser} >Login</button>
                <p className="form-text">
                    <Link to="#" className="form-link">Forget Your Password?</Link>
                </p>

                <p className="form-text">
                    <Link className="form-link" to="/signup" id="linkCreateAccount">Don't have an account? Create account</Link>
                </p>
            </div>
        </form>
        
    </div>
</section>


<div className="whatsapp">
    <Link to="https://wa.me/917905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
</div>
<Footer/>
<section className="credit">© 2022,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>

  </>
  )
}

export default Login
