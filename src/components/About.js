import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom'
function About2(prop) {
    const navigate=useNavigate();
      // eslint-disable-next-line
    const [userData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/about`,{
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
            //   navigate('/signin')
            }
        }
            useEffect(() => {
                callAboutPage()
              })
  return (
    <>
    
<div className="heading">
    <h1>About Us</h1>
    <p> <Link className='link' to="/home">HOME &gt;&gt;</Link>About </p>
</div>

<div className="about">
    
<div className="image">
        <img src="/image/about-img.jpg" alt="" />
    </div>

    <div className="content">
        <span>Welcome To Our Shop</span>
        <h3>Grown By Nature- Served by Nature</h3>
        <p> Biovegan is a community platform to deliver healthy, local & sustainable organic food from farms. We are committed to a sustainable food system to provide maximum benefits to both producers and consumers and contribute towards food sovereignty.</p>
        <p>Our commitment is to make nutritious and healthy organic food accessible to everyone. We provide direct access from multiple farms across the nation, that grow food without any synthetic chemicals. Food grown organically is more nutritious and healthy in comparison to conventional counterparts. Buying food directly from farms is also easy on your budget as there are no middle persons in the supply chain.</p>
        <Link to="#" className="btn">Read More</Link>
    </div>

</div>

<div className="gallery">

    <h1 className="title"> Our <span>Gallery</span> <Link to="#">View All &gt&gt</Link> </h1>

    <div className="box-container">

        <div className="box">
            <img src="/image/gallery-img-1.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

        <div className="box">
            <img src="image/gallery-img-2.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

        <div className="box">
            <img src="image/gallery-img-3.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

        <div className="box">
            <img src="image/gallery-img-4.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

        <div className="box">
            <img src="image/gallery-img-5.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

        <div className="box">
            <img src="image/gallery-img-6.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>
        <div className="box">
            <img src="/image/gallery-img-7.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>
        <div className="box">
            <img src="/image/gallery-img-8.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>
        <div className="box">
            <img src="/image/gallery-img-9.jpg" alt=""/>
            <div className="icons">
                <Link to="#" className="fas fa-eye"></Link>
                <Link to="#" className="fas fa-heart"></Link>
                <Link to="#" className="fas fa-share-alt"></Link>
            </div>
        </div>

    </div>

</div>
<div className="whatsapp">
    <Link to="https://wa.me/917905938368 " target="_blank"><img src="/image/whatsapp.png" width="50px" alt=""/></Link>
</div>
<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>


    </>
  )
}

export default About2