import React,{createContext,useReducer} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Login'
import Home from './components/Home';
import Home2 from './components/Home2';
import Shop from './components/Shop';
import Review from './components/Review';
import Blog from './components/Blog';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import './App.css';
import Logout from './components/Logout';
import {initialState,reducer} from "../src/UseReducer"


export const UserContext=createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //  const baseUrl="http://localhost:7777";
   const baseUrl="";
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={ <Home baseUrl={baseUrl}/>}/>
  <Route path="/home" element={ <Home2 baseUrl={baseUrl} />}/>
  <Route path="/about"  element={ <About baseUrl={baseUrl}/>}/>
  <Route path="/shop"  element={ <Shop baseUrl={baseUrl}/>}/>
  <Route path="/review" element={ <Review baseUrl={baseUrl}/>}/>
  <Route path="/blog"  element={ <Blog baseUrl={baseUrl}/>}/>
  <Route path="/cart" element={ <Cart baseUrl={baseUrl}/>}/>
  <Route path="/contact" element={ <Contact baseUrl={baseUrl}/>}/>
  <Route path="/signin"  element={ <Signin baseUrl={baseUrl} />}/>
  <Route path="/signup" element={ <Signup baseUrl={baseUrl}/>}/>
  <Route path="/logout" element={ <Logout baseUrl={baseUrl}/>}/>
  <Route path='*' element={<Errorpage/>}/>
  </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  </>
  );
}

export default App;
