import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
<>
<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>Quick links</h3>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> Home</Link>
            <Link className="link" to="/shop"> <i className="fas fa-arrow-right"></i> Shop</Link>
            <Link className="link" to="/about"> <i className="fas fa-arrow-right"></i> About</Link>
            <Link className="link" to="/review"> <i className="fas fa-arrow-right"></i> Review</Link>
            <Link className="link" to="/blog"> <i className="fas fa-arrow-right"></i> Blog</Link>
            <Link className="link" to="/contact"> <i className="fas fa-arrow-right"></i> Contact</Link>
        </div>

        <div className="box">
            <h3>Extra Links</h3>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> My Order </Link>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> My Favorite </Link>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> My Wishlist </Link>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> My Account </Link>
            <Link className="link" to="/home"> <i className="fas fa-arrow-right"></i> Terms Or Use </Link>
        </div>

        <div className="box">
            <h3>Follow us</h3>
            <Link className="link" to="https://www.facebook.com/profile.php?id=100083456011662" target="_blank"> <i className="fab fa-facebook-f"></i> Facebook </Link>
            <Link className="link" to="https://twitter.com/yashvan81926016" target="_blank"> <i className="fab fa-twitter"></i> Twitter </Link>
            <Link className="link" to="https://www.instagram.com/yashvantprajapati77/" target="_blank"> <i className="fab fa-instagram"></i> Instagram </Link>
            <Link className="link" to="https://www.linkedin.com/in/yashvant-prajapati-5a2859252/" target="_blank"> <i className="fab fa-linkedin"></i> Linkedin </Link>
        </div>
        
        <div className="box">
            <h3>Newsletter</h3>
            <p>Subscribe For Latest Updates</p>
            <form action="https://formsubmit.co/prajapatiyashvant746@gmail.com" method="POST">
                <input type="email" placeholder="Enter Your Email" name="email" required/>
                <button type="submit" value="subscribe" className="btn">Subscribe</button>
            </form>
            <img src="image/payment.png" className="payment" alt=""/>
<div className="elfsight-app-dea23914-bd07-4e43-a3e1-307a40a9502f"></div>
        </div>
       

    </div>

</section>
</>
  )
}

export default Footer