import React, {useContext, useEffect} from 'react'
import './CheckOut.css'
import delivery from '../../assets/food-delivery.png'
import { FaAt, FaUser, FaPhoneAlt, FaMapPin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {dataContext} from '../../App'
import cartonline from '../../assets/online.png'
import cashondelivery from '../../assets/cash-on-delivery.png'
import Footer from '../Footer/Footer';
// import axios from 'axios';

function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const { cart} = useContext(dataContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
    <div className=' container-fluid min-vh-100 d-flex  align-items-center justify-content-center' >
      <div className="container p-0">
        <div  className="row bg-white shadow-lg p-2 column-gap-0 row-gap-3 ">
          <div className="col col-12 col-md-6 d-flex align-items-center justify-content-start p-0 first-col">
            <div style={{backgroundColor:'#30475E'}} className='  d-flex align-items-center justify-content-start form-img p-5'>
              <img  className='img-fluid ' src={delivery} alt="delivery" />
            </div>
          </div>
          <div className="col col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><FaUser /></span>
              <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><FaAt /></span>
              <input   type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><FaPhoneAlt /></span>
              <input  type="text" className="form-control" placeholder="Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><FaLocationDot /></span>
              <textarea className="form-control" placeholder='Address' aria-label="With textarea"></textarea>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"  id="basic-addon1"><FaMapPin /></span>
              <input type="text" className="form-control" placeholder="Pincode" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="total d-flex w-100  align-items-center justify-content-between mb-3">
              <h4 className="m-0">Total</h4>
              <h4 className="m-0 text-success">{totalPrice}</h4>
            </div>
            <div className="row w-100 mb-3 py-2">
              <div className="col col-4 d-flex flex-column  align-items-center justify-content-center ">
                <img className='img-fluid form-order mb-1' src={cartonline} alt="" />
                <h5 className="m-0">1</h5>
              </div>
              <div className="col col-4 d-flex flex-column  align-items-center justify-content-center">
              <img className='img-fluid form-order mb-1' src={delivery} alt="" />
              <h5 className="m-0 text-success">2</h5>
              </div> 
              <div className="col col-4 d-flex flex-column  align-items-center justify-content-center">
              <img className='img-fluid form-order mb-1' src={cashondelivery} alt="" />
              <h5 className="m-0">3</h5>
              </div>
            </div>
            <button  style={{backgroundColor:'#F05454'}}  className="btn w-100 text-white  mb-1">Order Now</button>
            <p className='my-3 text-center'>Or</p>
            <Link style={{backgroundColor:'#222831'}}  to='/cart'  className='btn w-100 text-white' > Cancel</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CheckOut