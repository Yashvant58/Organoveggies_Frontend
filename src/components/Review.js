import {Link} from 'react-router-dom';
import Footer from './Footer';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Review(prop) {

    const navigate=useNavigate();
      // eslint-disable-next-line
    const [userData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/review`,{
          method:"GET",
          headers:{
            Accept:"apllication/json",
            "Content-Type":"application/json"
          },
          mode:"cors",
          credentials:"include"
        });
        const data=await res.json();
        setUserData(data);
        if(!res.status===200){
          const error =new Error(res.error);
          throw error;
        }
            }
            catch (err){
       
              navigate('/signin')
            }
        }
            useEffect(() => {
                callAboutPage()
              })
  return (
<>
<div className="heading">
    <h1>Client's Review</h1>
    <p> <Link className="link"to="/home">Home &gt;&gt;</Link> Review </p>
</div>

<section className="info-container">

    <div className="info">
        <img src="image/icon-1.png" alt=""/>
        <div className="content">
            <h3>Fast Delivery</h3>
            <span>Within 30 Minutes</span>
        </div>
    </div>

    <div className="info">
        <img src="image/icon-2.png" alt=""/>
        <div className="content">
            <h3>24 / 7 Available</h3>
            <span>Call Us Anytime</span>
        </div>
    </div>

    <div className="info">
        <img src="image/icon-3.png" alt=""/>
        <div className="content">
            <h3>Easy Payments</h3>
            <span>Cash Or Credits</span>
        </div>
    </div>

</section>

<section className="review">

    <div className="box">
        <div className="user">
            <img src="image/pic-1.png" alt=""/>
            <div className="info">
                <h3>Robert Lockhart</h3>
                <span>Happy client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div className="box">
        <div className="user">
            <img src="image/pic-2.png" alt=""/>
            <div className="info">
                <h3>J.N. Choudhuri</h3>
                <span>Happy Client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div className="box">
        <div className="user">
            <img src="image/pic-3.png" alt=""/>
            <div className="info">
                <h3>Dalbir Singh Suhag</h3>
                <span>Happy Client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div className="box">
        <div className="user">
            <img src="image/pic-4.png" alt=""/>
            <div className="info">
                <h3>Punita Arora</h3>
                <span>Happy Client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div className="box">
        <div className="user">
            <img src="image/pic-5.png" alt=""/>
            <div className="info">
                <h3>Manoj Mukund Naravane

                </h3>
                <span>Happy Client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

    <div className="box">
        <div className="user">
            <img src="image/pic-6.png" alt=""/>
            <div className="info">
                <h3>Padmavathy Bandopadhyay</h3>
                <span>Happy Client</span>
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestiae expedita culpa officiis harum impedit vel! Odit saepe similique vero!</p>
    </div>

</section>
<div className="whatsapp">
    <Link to="https://wa.me/917905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
</div>
<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>



</>
  )
}

export default Review