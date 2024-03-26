import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Cart(prop) {

    const navigate=useNavigate();
      // eslint-disable-next-line
    const [useData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/cart`,{
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
              // navigate('/signin')
            }
        }
            useEffect(() => {
                callAboutPage()
              })
  return (
  <>
  <div className="products-container">
        <table className="customTable">
           <thead>
            <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            </tr>
        </thead>
    </table>
    <table className="display-products">

    </table>
    <div className="cart-Total"></div>
    </div>

    <section id="cart-add" className="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon"/>
                <button  type='submit' className="btn" >Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <button type="submit" className="btn">Proceed To Checkout</button>
        </div>
    </section>
    <div className="whatsapp">
        <Link className="link"to="https://wa.me/917905938368" target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
    </div>


<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>


  </>
  )
}

export default Cart