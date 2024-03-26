import {React,useState} from 'react'
import {Link} from "react-router-dom";
import Footer from './Footer';
function Signup(prop) {
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name,value;
  
  const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
  }

  const fetchData=async(e)=>{
    e.preventDefault();
const {name,email,phone,work,password,cpassword}=user;

const response= await fetch(`/register`,{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
mode:"cors",
credentials:"include",
  body:JSON.stringify({
    name,email,phone,work,password,cpassword
  })
}
)

const data= await response.json();

if(!data){
  window.alert("Invalid Registration");

}else{
  window.alert(" Registration successful");

  // navigate("/signin");
}
  }

  return (
    <>
  <section id="login" className="section-p1">
    <div className="login-container">
        <p id="alert"></p>


        <form className="form"  id="createAccount">
            <h2 className="form-title">Create Account</h2>

            <div className="form-input-group">
                <input type="text" id="username" name='name' autoComplete='off' value={user.name} onChange={handleInputs} className="form-input" autoFocus placeholder="Username" required/>
            </div>
            <div className="form-input-group">
                <input type="email" id="email"name='email' autoComplete='off' value={user.email} onChange={handleInputs} className="form-input" autoFocus placeholder="Email Address" required/>
            </div>
            <div className="form-input-group">
            <input type="Number" name='phone' placeholder='Mobile Number' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs}className="form-input" autoFocus/>
            </div>
            <div className="form-input-group">
            <input type="text" name='work' placeholder='Your Profession' id='work' autoComplete='off' value={user.work} onChange={handleInputs}className="form-input" autoFocus/>
            </div>
            <div className="form-input-group">
                <input type="password" id="password" name='password' placeholder='Password' autoComplete='off' value={user.password} onChange={handleInputs}className="form-input" autoFocus required/>
            </div>
            <div className="form-input-group">
                    <input type="password"name='cpassword'id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} className="form-input" autoFocus placeholder="Confirm Password" required/>
            </div>
                <button className="btn" type="submit" onClick={fetchData}>Continue</button>

                <p className="form-text">
                    <Link className="form-link" to="/signin" id="linkLogin">Already Have an account? Sign in</Link>
                </p>
          
        </form>

        </div>
        </section>
  <Footer/>
  <section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>
  </>
  )
}

export default Signup