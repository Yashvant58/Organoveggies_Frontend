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
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={ <Home />}/>
  <Route path="/home" element={ <Home2  />}/>
  <Route path="/about"  element={ <About />}/>
  <Route path="/shop"  element={ <Shop />}/>
  <Route path="/review" element={ <Review />}/>
  <Route path="/blog"  element={ <Blog />}/>
  <Route path="/cart" element={ <Cart />}/>
  <Route path="/contact" element={ <Contact />}/>
  <Route path="/signin"  element={ <Signin  />}/>
  <Route path="/signup" element={ <Signup />}/>
  <Route path="/logout" element={ <Logout />}/>
  <Route path='*' element={<Errorpage/>}/>
  </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  </>
  );
}

export default App;
