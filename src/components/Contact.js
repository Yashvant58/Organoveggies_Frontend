import React,{useEffect,useState} from 'react'
import Footer from './Footer.js';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe'
function Contact () {
const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
const userContact=async()=>{
  try{
const res=await fetch(`/getdata`,{
method:"GET",
headers:{
  "Content-Type":"application/json"
},
mode:"cors",
credentials:"include",
});
const data=await res.json();
setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
console.log(userData);
if(!res.status===200){
const error =new Error(res.error);
throw error;
}
  }
  catch (err){

  }
}
useEffect(() => {
  userContact();

})

let name,value;
const handleInputs =(e)=>{
  name=e.target.name;
  value=e.target.value;
  setUserData({...userData,[name]:value})
}
const contactForm = async(e)=>{
    e.preventDefault();
    const  {name,email,phone,message}=userData;
const response= await fetch(`/getcontact`,{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  mode:"cors",
credentials:"include",
  body:JSON.stringify({
    name,email,phone,message
  })
}
)
const data= await response.json();

 if(!data){
  alert("message sending failed");
  console.log("message sending faild from data");
}else{
  alert("message sending successfully");
  console.log("message sending  success from data");
  setUserData({...userData,message:""});
}
}
  return (
          <>
        
<div className="heading">
    <h1>Contact us</h1>
    <p> <Link className="link" to="/home">Home &gt;&gt;</Link> Contact </p>
</div>

<div className="contact">

    <div className="icons-container">

        <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>Our Number</h3>
            <p><Link className="link"to="tel:+7620493763">+91-7905938368</Link></p>
            <p><Link className="link"to="tel:+9527709175">+91-7570050956</Link></p>
        </div>

        <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>Our Email</h3>
            <p> <Link  className="link"to="mailto:prajapatiyashvant746@gmail.com">prajapatiyashvant746@gmail.com</Link></p>
            <p><Link className="link" to="prajapatiyashvant746@gmail.com">contact@Bioyash.com</Link></p>
        </div>

        <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Address</h3>
            <p>Sohrabhar Mahula Azamgath, India -275303</p>
        
        </div>

    </div>

    <div className="row">

        <form action="https://formsubmit.co/prajapatiyashvant746@gmail.com" method="POST" target="_blank">
            <h3>Get In Touch</h3>
            <div className="inputBox">
                <input type="text"  name="name" placeholder="Username"className="box" readOnly required/>
                <input type="email"  placeholder="Name"name="email" className="box" readOnly required/>
            </div>
            <div className="inputBox">
                <input type="number" name="phone" placeholder='Phone No' className="box" readOnly required/>
            </div>
            <textarea placeholder="Write your message" cols="30" name="message"  onChange={handleInputs} rows="10" required></textarea>
            <button type="submit" onClick={contactForm} className="btn">Send message</button>
        </form>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7158.136617257448!2d83.44397262493267!3d26.226969933710546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399182e3d882af6b%3A0xc9425d3ec00600f1!2sSohra%20Bhar%20Lagri%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678079842927!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

    </div>

</div>

<div className="whatsapp">
    <Link className="link"to="https://wa.me/7905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
</div>

<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>
          </>
  )
}

export default Contact