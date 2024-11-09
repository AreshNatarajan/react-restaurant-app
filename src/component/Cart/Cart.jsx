import React, { useContext, useState, useEffect } from 'react'
import { dataContext } from "../../App";
import { FaXmark } from "react-icons/fa6";
import './Cart.css'
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from "react-icons/fa";
import { BsBagCheckFill, BsBagXFill } from "react-icons/bs";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom';
import cartonline from '../../assets/online.png'
import Footer from '../Footer/Footer';


function WatchData({ data, toggleList }) {
    const {  watchList } = useContext(dataContext)
    return (<>
   
        <div className="btn-group w-100 mb-3 border border-2 rounded-5 ">
            <button onClick={toggleList} className="btn  d-flex align-items-center justify-content-center w-50"><FaShoppingBag fill='#222831' /></button>
            <button style={{ backgroundColor: '#30475E' }} className="btn rounded-5 d-flex align-items-center justify-content-center w-50"><FaHeart fill='red' /></button>
        </div>
        <h4 style={{ color: '#F05454' }} className='mx-0 my-3' ><span style={{ color: '#30475E' }} className='mx-1'>Your</span>Watchlist </h4>
        {
        watchList.length <= 0 ? (<>
        <div className="row row-gap-3">
            <div className="col-12 d-flex align-items-center justify-content-center">
                 <img className='img-fluid  empty' src={cartonline} alt="" />
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
                <h5>Your <span style={{ color: '#F05454' }} >Watchlist</span> is eismpty</h5>
            </div>
        </div>
        
        </>) : (<>{
            data.map((item, index) => (
                <Watchlist key={index} data={item} />
            ))
        }</>)
    }
        
    </>)
}

function Watchlist({ data }) {
    const { cart, setCart, setWatchList, watchList } = useContext(dataContext)
    const handleAddCart = () => {
        setCart([...cart, data])
    }
    const handleRemoveCart = () => {
        setCart(cart.filter(item => item.id !== data.id))
    }

    const deletWatchList = () => {
        setWatchList(watchList.filter(item => item.id !== data.id))
    }
    return (
        <>
            <div className='d-flex align-items-center border border-1 border-dark rounded-5 justify-content-between mb-3 ' >
                <div className="d-flex align-items-center gap-3">
                    <img className='cart-img img-fluid rounded-5' src={data.img} alt={data.img} />
                    <div className='d-flex flex-column align-items-start p-1 gap-3' >
                        <p className="mx-0 my-3 cart-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1, 6) + '...'}</p>
                        {
                            !cart.includes(data) ? <button onClick={handleAddCart} className="btn">
                                <BsBagCheckFill fill='green' />
                            </button> : <button onClick={handleRemoveCart} className="btn">
                                <BsBagXFill fill='red' />
                            </button>
                        }
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between gap-3 align-items-center p-1">
                    <h5 className='mx-0 cart-price'>{data.price}</h5>
                    <FaXmark onClick={deletWatchList} className='mt-4' />
                </div>

            </div>
        </>
    )
}

function CartData({ data, toggleList, isCartList }) {
    const { cart } = useContext(dataContext)
    return (
        <>
            <div className="btn-group border border-2 rounded-5 w-100 mb-3 ">
                <button style={{ backgroundColor: '#30475E' }} className="btn rounded-5 d-flex align-items-center justify-content-center w-50"><FaShoppingBag fill={isCartList ? '#DDDDDD' : '#DDDDDD'} /></button>
                <button onClick={toggleList} className="btn d-flex align-items-center justify-content-center w-50"><FaHeart fill='red' /></button>
            </div>
            <h4 style={{ color: '#F05454' }} className='mx-0 my-3' ><span style={{ color: '#30475E' }} className='mx-1'>Your</span>Cart</h4>
            {
                cart.length <= 0 ? (<>
                    <div className="row row-gap-3">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                             <img className='img-fluid  empty' src={cartonline} alt="" />
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <h5>Your <span style={{ color: '#F05454' }} >Cart list</span> is empty</h5>
                        </div>
                    </div>
                    
                    </>) : (<>
                        {
                data.map((item, index) => (
                    <CartList key={index} data={item} />
                ))
            }
                    </>)
            }
            
        </>
    )
}

function CartList({ data }) {
    const { cart, setCart } = useContext(dataContext)
    const deleteCart = () => {
        setCart(cart.filter(item => item.id !== data.id))
    }
    const handleIncreaseCount = (id) => {
        const updateQunatity = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updateQunatity);
    }

    const handleDecreseCount = (id) => {
        const updateQunatity = cart.map((item) =>
            item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item);
        setCart(updateQunatity)
    }

    return (
        <>
            <div className='d-flex align-items-center border border-1 border-dark rounded-5 justify-content-between mb-3 shadow-md ' >
                <div className="d-flex align-items-center gap-md-3 ">
                    <img className='cart-img img-fluid rounded-5' src={data.img} alt={data.img} />
                    <div className='d-flex flex-column align-items-start p-1 gap-3' >
                        <p className="mx-0 my-3 cart-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1, 7) + '...'}</p>
                        <div style={{ backgroundColor: '#DDDDDD' }} className="btn rounded-5 btn-group m-0 p-0">
                            <button onClick={() => handleDecreseCount(data.id)} className="btn d-flex align-items-center justify-content-center"><TiMinus /></button>
                            <button className="btn d-flex align-items-center justify-content-center">{data.quantity}</button>
                            <button onClick={() => handleIncreaseCount(data.id)} className="btn d-flex align-items-center justify-content-center"><TiPlus /></button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between gap-3 align-items-center p-1">
                    <h5 className='mx-0  cart-price'>{data.price}</h5>
                    <FaXmark onClick={deleteCart} className='mt-4' />
                </div>
            </div>
        </>
    )
}

function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { cart, watchList } = useContext(dataContext);
    const [isCartList, setIsCartList] = useState(false)
    const toggleList = () => {
        setIsCartList(!isCartList)
    }
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <>
            <div className='container min-vh-100' >
                <div className="row row-gap-4 mt-2">
                    <div className="col col-12 col-md-6 bg-white  p-1">
                        <div className='shadow shadow-md p-2' >
                            <h4 style={{ color: '#F05454' }} className='mx-0 my-3' ><span style={{ color: '#30475E' }} className='mx-1'>Order</span>Summary</h4>
                            <div className="total-items d-flex align-items-center justify-content-between mb-3">
                                <div className="fs-6">Total Items</div>
                                <div className="fs-6">{totalQuantity}</div>
                            </div>
                            <div className="total-items d-flex align-items-center justify-content-between mb-3">
                                <div className="fs-6">Subtotal</div>
                                <div className="fs-6">{totalPrice.toFixed(2)}</div>
                            </div>
                            <div className="total-items d-flex align-items-center justify-content-between mb-3">
                                <div className="fs-6">Delivery</div>
                                <div className="fs-6 text-success">Free</div>
                            </div>
                            <div className="total-items d-flex align-items-center justify-content-between mb-3 total">
                                <div className="fs-4">Total</div>
                                <div className="fs-4">{totalPrice.toFixed(2)}</div>
                            </div>
                            {
                                cart.length <= 0 && watchList <= 0 ? (<><button style={{backgroundColor:'#30475E'}} className='btn w-100 text-white' >Add cart and checkout</button></>) : (<><Link to='/checkout' style={{ backgroundColor: '#F05454' }} className="btn w-100  text-white ">Checkout</Link></>)

                            }
                            
                        </div>

                    </div>
                    <div className="col col-12 col-md-6">

                        {
                            !isCartList ? <CartData data={cart} toggleList={toggleList} isCartList={isCartList} setIsCartList={setIsCartList} />
                                : <WatchData data={watchList} toggleList={toggleList} isCartList={isCartList} setIsCartList={setIsCartList} />
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cart