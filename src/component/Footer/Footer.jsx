import React, {useEffect, useState} from 'react'

import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    const [year, setYear] = useState('') 
    useEffect(()=>{
        setYear(new Date().getFullYear())
    },[])
  return (
    <div style={{backgroundColor:'#222831', color:'#DDDDDD'}} className=' container-fluid py-4' >
       <h5 className='m-0 text-center d-flex align-items-center justify-content-center gap-1' ><FaRegCopyright/> Copyright {year} , All right reserved </h5>
    </div>
  )
}

export default Footer