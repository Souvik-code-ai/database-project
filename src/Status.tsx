
import successful from './assets/check.png'
import unsuccessful from './assets/remove.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Status = () => {
  //  const refButton=useRef();
  // function handleBackButton(){

  //   console.log(refButton.current);
  // }
  return (
    <div className='fixed backdrop-blur-sm inset-0 bg-black/30 flex justify-center items-center'>
      <div className='flex fixed flex-col justify-center items-center  gap-6   shadow-blue-600 shadow-2xl py-10 rounded-2xl px-7  bg-linear-to-br from-blue-50 via-white to-purple-50' >
        <img src={successful} alt="" className='h-14 w-14' />
        <h1 className='text-emerald-600 text-4xl'>Log In Successful!!!!</h1>
        <div>
          <Link to="/">
            <Button title={"Back to Home Page"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-xl '} />
          </Link>

        </div>
      </div>


    </div>

  )
}
export function UnseccessfulStatus() {
  //  const refRetryButton=useRef<HTMLDivElement|null>(null);
  // function handleRetryButton():void{
  //   if(refRetryButton.current){
  //     refRetryButton.current.style.display="none";
  //   }
  // }
  return (
    <div className='fixed backdrop-blur-sm inset-0 bg-black/30 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center  gap-6   shadow-blue-600 shadow-2xl py-10 rounded-2xl px-7 bg-linear-to-br from-blue-50 via-white to-purple-50' >
        <img src={unsuccessful} alt="" className='h-14 w-14' />
        <h1 className='text-red-600 text-4xl'>Wrong email address or password entered.</h1>
        <div className='flex flex-row justify-between items-center gap-5'>
          <Link to="/">
            <Button title={"Back to Home Page"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-xl '} />
          </Link>
          <Link to="/login">

          </Link>

        </div>
      </div>
    </div>

  )
}

export default Status;
