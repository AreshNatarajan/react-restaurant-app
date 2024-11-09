import React, { useContext } from 'react'
import { dish } from '../../assets/img/data/data'
import { FaIndianRupeeSign, FaRegHeart, FaHeart } from 'react-icons/fa6'
import { dataContext } from '../../App'
import { BsBagCheckFill, BsBagXFill } from "react-icons/bs";
import ProductNav from '../ProductNav/ProductNav';
import Footer from '../Footer/Footer';

function Content({ value }) {
  const { cart, setCart, watchList, setWatchList } = useContext(dataContext)
  const handleAddCart = () => {
    console.log(value)
    setCart([...cart, value])
  }
  const handleRemoveCart = () => {
    setCart(cart.filter(item => item.id !== value.id))
  }
  const handleAddWatchList = ()=>{
    setWatchList([...watchList, value])
  }
  const handleRemoveWatchList = ()=>{
    setWatchList(watchList.filter(item=> item.id !== value.id))
  }
  return (
    <div className="col col-6 col-md-6 col-lg-3 p-2 product-column ">
      <div className='m-0 position-relative' >
        <img className='img-fluid rounded-5 product-img' src={value.img} alt={value.name} />
        <button className="btn-white  d-flex align-items-center justify-content-center watchlist">
          {watchList.includes(value) ? <FaHeart fill='red' onClick={handleRemoveWatchList} /> : <FaRegHeart onClick={handleAddWatchList} />}
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-between my-1 p-1">
        <p className="m-0 food-name fw-2">{value.name}</p> 
         <button className="btn-white  d-flex align-items-center justify-content-center  addcart-btn ">
          {cart.includes(value) ? <BsBagXFill onClick={handleRemoveCart} fill='red' className='fs-5' /> : <BsBagCheckFill onClick={handleAddCart} fill='green' className='fs-5' />}
        </button>
      </div>
      <p style={{color:'#222831'}} className="m-0 fs-5 fw-2 mx-1 d-flex gap-2 align-items-center ">{value.price} <span className='fs-6' ><FaIndianRupeeSign /></span></p>
    </div>
  )
}

function Recipes({ category }) {
  const select = category
  console.log(dish);
  
  const selected = () => {
    return dish[select]
  }
  const data = selected();
  return (
    <>
     <div className='container min-vh-100' >
      <ProductNav/>
      <h4 style={{color:'#F05454'}} className='mx-0 mt-3 mb-1' ><span style={{color:'#30475E'}}  className='mx-1'>Our</span>Recipes</h4>
      <div className="row">
        {
          data.map((item, index) => (
            <Content key={index} value={item} />
          ))
        }
      </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Recipes 