import React, { useState, useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { dataContext } from "../../App";
import logo from '../../assets/dish.png'
function Nav() {
  const [isNavOPen, setIsNavOpen] = useState(false);
  const handleNavOPen = () => {
    setIsNavOpen(!isNavOPen);
  };
  const { cart } = useContext(dataContext)
  return (
    <>
      <div
        style={{ width: isNavOPen ? "100vw" : "0px" }}
        className="min-vh-100 d-flex flex-column  align-items-start justify-content-center overflow-hidden hidden-nav "
      >
        <div style={{ backgroundColor: '#DDDDDD' }} className="div w-50 d-flex flex-column  align-items-center justify-content-start shadow-lg min-vh-100">
          <div className="nav w-50 d-flex flex-column align-items-center mt-5  gap-3">
            <Link to='/' onClick={handleNavOPen} className="text-decoration-none nav-text fs-6">Home</Link>
            <Link to='/recipes' onClick={handleNavOPen} className="text-decoration-none nav-text fs-6">Recipes</Link>
          
          </div>
          <div onClick={handleNavOPen} className="close">
            <FaX />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#DDDDDD' }} className="w-100 d-flex align-items-center justify-content-between nav-div">
        <img src={logo} alt="logo" className="logo mx-4" />
        <div className="nav-bar">
          <Link to='/' className="text-decoration-none mx-2 nav-text fs-6">Home</Link>
          <Link to='/recipes' className="text-decoration-none nav-text mx-2 fs-6">Recipes</Link>
          
        </div>
        <div className="cart d-flex align-items-center  gap-3 mx-3">
          <Link to='/cart ' className=" d-flex align-items-center nav-text text-decoration-none " >
            <FaShoppingBag />
            <span  style={{color:'#F05454'}} className="text-decoration-none border-0  mx-1 mb-2  p-0" >{cart.length}</span> </Link>
          <div onClick={handleNavOPen} className="bar">
            <FaBars />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
