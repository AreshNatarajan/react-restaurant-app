import React from 'react'
import './ProductNav.css'
import { Link } from 'react-router-dom'
import apppetizer from '../../assets/img/data/Appetizers/Buffalo.jpeg'
import south from '../../assets/img/data/South/Chettinad.jpeg'
import north from '../../assets/img/data/North/Butter.jpeg'
import starters from '../../assets/img/data/Starters/Chops.jpeg'
import desserts from '../../assets/img/data/Desserts/Tiramisu.jpeg'
import cake from '../../assets/img/data/Cakes/Velvet.jpeg'
const productNavData = [
    {name : 'Appetizers', img : apppetizer, path : 'Appetizers' },
    {name : 'South', img : south, path : 'south'},
    {name : 'North', img : north, path : 'north'},
    {name : 'Starters', img : starters, path :'starters'},
    {name : 'Desserts', img : desserts, path : 'desserts'},
    {name : "Cakes", img: cake, path : `cakes`}
]
function ProductNav() {
  return (
    <div className='w-100' >
        <h4 style={{color:'#F05454'}} className='mx-0 mt-3 mb-1' ><span style={{color:'#30475E'}} className='mx-1'>Our</span>Category</h4>
        <div className='d-flex gap-3 align-items-center justify-content-md-center md-justify-content-start  productNav_div ' >
        {
            productNavData.map((item, index)=>(
                <Link className='d-flex text-decoration-none gap-2 flex-column align-items-center justify-content-center ' to={item.path === 'Appetizers' ? `/recipes` : `/recipes/${item.path}`} key={index} >
                    <img  className='img-fluid productNave-img' src={item.img} alt="" />
                    <h4 className='fs-6 text-dark product-name m-0' >{item.name}</h4>
                </Link>
            ))
         }
        </div>
    </div>
  )
}

export default ProductNav