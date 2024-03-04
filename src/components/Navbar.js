import React,{useState,useContext} from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {UserContext} from "../App";
function Navbar() {
  const {state}=useContext(UserContext);
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(true);
  const handleClick2 = event => {
  
    setIsSearch(current => !current);
  };
  const handleClick = event => {
  
    setIsActive(current => !current);
  };
  const NavMenu=()=>{

  if(state){
    return(
      <>
 
    <span><Link  to="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i></Link></span>
  
  </>
    )
  }else{
    return(
    <>
          <span><Link  to="/signin"><i className="fa fa-sign-in" aria-hidden="true"></i></Link></span>
        
    </>
    )
  }
}


  return (
    <>
  <header className="header">
  <Link  to="/" className="logo link navbar-brand"><i className="fas fa-american-sign-language-interpreting"></i>Organoveggies</Link>
  <nav className={isActive ?"navbar":"navbar active"}>
    <Link  to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link  to="/shop">Shop</Link>
    <Link  to="/review">Review</Link>
    <Link   to="/blog">Blog</Link>
    <Link   to="/contact">Contact</Link>
       
       
  </nav>
  <div className='icons'>
    <span id="menu-btn" onClick={handleClick }className='fas fa-bars'></span>
    <span id="search-btn" onClick={handleClick2} className="fas fa-search"></span>
        <span><Link to="/cart"className="fas fa-shopping-cart" ></Link></span>
        <NavMenu/>
  </div>
  <form className={isSearch?"search-form":"search-form active"}>
  <input type="search" placeholder='search here...' id="search-box"/>
  <label htmlFor="search-box"className='fas fa-search'></label>
  </form>
  </header>
    </>
  )
}

export default Navbar