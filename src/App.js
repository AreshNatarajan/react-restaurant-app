import React, {createContext, useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'

import Recipes from './component/Recipes/Recipes '
import Cart from './component/Cart/Cart'
import CheckOut from './component/Checkout/CheckOut'

export const dataContext = createContext()
function App() {
  const [cart, setCart] = useState([])
  const [watchList, setWatchList] = useState([])
  return (
   <>
   <dataContext.Provider value={{cart, setCart, watchList, setWatchList}} >
   <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes category='appetizers' />}/>
      <Route path='/recipes/desserts' element={<Recipes category='desserts' />}/>
      <Route path='/recipes/north' element={<Recipes category='north' />}/>
      <Route path='/recipes/starters' element={<Recipes category='starters' />}/>
      <Route path='/recipes/south' element={<Recipes category='south' />}/>
      <Route path='/recipes/cakes' element={<Recipes category='cakes' />}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<CheckOut/>} />
    </Routes>
   </dataContext.Provider>
   </>
  )
}

export default App