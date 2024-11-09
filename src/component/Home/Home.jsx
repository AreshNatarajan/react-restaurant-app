import React from 'react'
import './Home.css';
import {FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container-fluid home d-flex align-items-md-center align-items-start justify-content-center w-100 min-vh-100' >
        <div className="container mt-3  d-flex flex-column align-items-center justify-content-center">
            <p className="m-0 text-white display-1">Welcome</p>
            <p className="m-0 text-white mb-2 fs-5">Lorem ipsum dolor sit amet.</p>
            <Link to='/recipes' className="btn d-flex text-white border border-white p-2 gap-3 align-items-center align-items-center">Explore <FaShoppingBag fill='white' /></Link>
        </div>
    </div>
  )
}

export default Home