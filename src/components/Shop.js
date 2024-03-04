import React from 'react'
import {Link} from 'react-router-dom';
import Footer from './Footer';
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Shop(prop) {
 
    const navigate=useNavigate();
     // eslint-disable-next-line
    const [userData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/shop`,{
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
                callAboutPage();
              })
  return (
    <>
<div className="heading">
    <h1>Our Shop</h1>
    <p><Link className="link nav-Link"to="/home">Home &gt;&gt;</Link> Shop </p>
</div>

<section className="category">
    <h1 className="title"> Our <span>Category</span><Link className="link nav-Link"to="/shop">View All &gt;&gt;</Link> </h1>

    <div className="box-container">

       <Link className="nav-Link box"to="#">
            <img src="image/cat-1.png" alt=""/>
            <h3>Fresh Fruits</h3>
       </Link>

       <Link className="nav-Link box"to="#">
            <img src="image/cat-2.png" alt=""/>
            <h3>Vegetables</h3>
       </Link>

       <Link className="nav-Link box"to="#">
            <img src="image/cat-3.png" alt=""/>
            <h3>Organic Spices</h3>
       </Link>

       <Link className="nav-Link box"to="#">
            <img src="image/cat-4.png" alt=""/>
            <h3>Fresh Meat</h3>
       </Link>

       <Link className="nav-Link box"to="#">
            <img src="image/cat-5.png" alt=""/>
            <h3>Organic Wheat</h3>
       </Link>

    </div>

</section>

<section className="products">

    <h1 className="title"> Our <span>Products</span><Link className="nav-Link"to="#">View All &gt&gt</Link> </h1>

    <div className="box-container">

        <div className="box">
            <div className="icons">
               <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-1.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Apple</h3>
                <div className="prices">$19.44</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-2.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Pumpkins</h3>
                <div className="prices">$6.77</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-3.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Carrot</h3>
                <div className="prices">$18.1</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-4.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Herbs and Spices</h3>
                <div className="prices">$15.60</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-5.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Pasteurized Milk</h3>
                <div className="prices">$6.99</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-6.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Pomegranate</h3>
                <div className="prices">$12.33</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-7.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Bulb Onion</h3>
                <div className="prices">$10.00</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-8.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>White Potato Vine</h3>
                <div className="prices">$16.87</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>
        
        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-9.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Semolina</h3>
                <div className="prices">$18.99</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>
        
        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-10.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Runner Bean</h3>
                <div className="prices">$14.01</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>
        
        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-11.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Juice Drink	</h3>
                <div className="prices">$09.55</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>
        
        <div className="box">
            <div className="icons">
            <Link to="#" className="nav-Link fas fa-shopping-cart btn-product "></Link>
               <Link to="#" className="nav-Link fas fa-heart"></Link>
               <Link to="#" className="nav-Link fas fa-eye"></Link>
            </div>
            <div className="image">
                <img src="image/product-12.jpg" alt=""/>
            </div>
            <div className="content">
                <h3>Strawberry</h3>
                <div className="prices">$13.91</div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
        </div>

    </div>

</section>
<div className="whatsapp">
   <Link className="nav-Link"to="https://wa.me/917905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
</div>


<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>


    </>
  )
}

export default Shop