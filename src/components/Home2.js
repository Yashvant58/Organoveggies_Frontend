import {Link} from "react-router-dom";
import Footer from './Footer';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Home2(prop) {

    const navigate=useNavigate();
      // eslint-disable-next-line
    const [userData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/home`,{
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
<section className="home" >

    <div className="slides-container">

        <div className="slide active">
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Upto 30% Off</h3>
                <Link to="login" className="btn">Shop now</Link>
               
            </div>
            <div className="image">
                <img src="image/home-img-1.png" alt=""/>
            </div>
        </div>
        

        <div className="slide">
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Upto 25% Off</h3>
                <Link to="/shop" className="btn ">Shop Now</Link>
            </div>
            <div className="image">
                <img src="image/home-img-2.png" alt=""/>
            </div>
        </div>

        <div className="slide">
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Upto 40% Off</h3>
                <Link to="login" className="btn ">Shop Now</Link>
            </div>
            <div className="image">
                <img src="image/home-img-3.png" alt=""/>
            </div>
        </div>
        <div className="slide">
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Upto 27% Off</h3>
                <Link to="login" className="btn ">Shop Now</Link>
            </div>
            <div className="image">
                <img src="image/home-img-4.png" alt=""/>
            </div>
        </div>

    </div>

    <div id="next-slide" className="fas fa-angle-right"></div>
    <div id="prev-slide" className="fas fa-angle-left"></div>

</section>

<section className="banner-container">

    <div className="banner">
        <img src="image/banner-1.jpg" alt=""/>
        <div className="content">
            <span>Limited Sales</span>
            <h3>Upto 40% Off</h3>
            <Link to="login" className="btn btn-product">Shop now</Link>
        </div>
    </div>

    <div className="banner">
        <img src="image/banner-2.jpg" alt=""/>
        <div className="content">
            <span>Limited Sales</span>
            <h3>Upto 60% Off</h3>
            <Link to="login" className="btn btn-product">Shop Now</Link>
        </div>
    </div>

    <div className="banner">
        <img src="image/banner-3.jpg" alt=""/>
        <div className="content">
            <span>Limited Sales</span>
            <h3>Upto 35% Off</h3>
            <Link to="#" className="btn btn-product">Shop Now</Link>
        </div>
    </div>
    
    </section>


<div className="whatsapp">
    <Link to="https://wa.me/917905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt="whatsapp img"/></Link>
</div>
<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>
 </>
  )
}

export default Home2