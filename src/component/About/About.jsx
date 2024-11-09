import React from 'react'
import './About.css'
import chicken from '../../assets/img/vecteezy_homemade-a-full-roasted-chicken-with-lemon-potatoes-and_46430071.png'
// import tosted from '../../assets/img/pexels-ella-olsson-572949-1640773.jpg'
import tosted from '../../assets/img/vecteezy_high-quality-mouth-watering-delicious-food-image-isolated_47820734.png'
function About() {
  return (
    <div className='container min-vh-100 mt-3 ' >
      <div className="row  row-gap-3 mb-3">
        <div className="col col-12 col-md-4 d-flex align-items-center justify-content-center">
          <div style={{backgroundColor:'#30475E'}} className='  rounded-5 '>
            <img className='img-fluid' src={tosted} alt="" />
          </div>
        </div>
        <div className="col col-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div className='para'>
          <h4 className='mx-0 mb-2' >Well-Cooked Dishes</h4>
          <p style={{ textIndent: '15px' }} className='m-0' >
            At our restaurant, we take pride in crafting each dish with precision and passion. Our culinary team brings years of experience and expertise, ensuring that every meal is not just food but a delightful experience.
          </p>
          </div>
          
        </div>
      </div>
      <div className="row  row-gap-3">
        <div className="col col-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
          <div  className=' para'>
          <h4 className='mx-0 mb-2'>Fresh Materials</h4>
          <p style={{ textIndent: '15px' }} className="m-0">
            We are dedicated to sourcing only the freshest ingredients for our dishes. Our commitment to quality starts with carefully selected produce, meats, and spices, all chosen for their exceptional flavor and freshness
          </p>
          </div>
        </div>
        <div className="col col-12 col-md-4 ">
          <div style={{backgroundColor: '#F05454'}} className=' rounded-5' >
            <img className='img-fluid' src={chicken} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About