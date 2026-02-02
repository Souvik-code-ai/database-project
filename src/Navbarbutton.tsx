import React from 'react'
import { Link } from 'react-router-dom'
const Navbarbutton = ({option,endpoint}) => {
  return (
    <Link to={endpoint}><div id="home" className='text-gray-700 hover:text-blue-600 text-xl md:text-2xl'>{option}</div></Link>
    
   
  )
}
const SmallNavbarbutton = ({option,endpoint}) => {
  return (
    <Link to={endpoint}><div id="home" className='text-white text-md p-5 hover:text-xl cursor-pointer'>{option}</div></Link>
    
   
  )
}
export{
  SmallNavbarbutton
}
export default Navbarbutton
