
import { Link } from 'react-router-dom'
interface NavbarbuttonUser{
  option:string;
  endpoint:string;
  functionName?: () => void;
}
const Navbarbutton = ({option,endpoint,functionName}:NavbarbuttonUser) => {
  return (
    <Link to={endpoint}><nav id="home" className='text-gray-700 hover:text-blue-600 text-xl md:text-2xl cursor-pointer' onClick={functionName}>{option}</nav></Link>
    
   
  )
}
interface smallNavbarbuttonUser{
  option:string;
  endpoint:string;
 
}
const SmallNavbarbutton = ({option,endpoint}:smallNavbarbuttonUser) => {
  return (
    <Link to={endpoint}><nav id="home" className='text-white text-md p-5 hover:text-xl cursor-pointer'>{option}</nav></Link>
    
   
  )
}
export{
  SmallNavbarbutton
}
export default Navbarbutton
