import  { useRef } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Button from './Button'
import Heading from './Heading'
import Description from './Description'
const Users = () => {
  const [getdata, setGetData] = useState<User[]>([]);
  const handleShowButton=useRef<HTMLButtonElement|null>(null);
    const handleHideButton=useRef<HTMLButtonElement|null>(null);
    const refUserButton=useRef<HTMLDivElement|null>(null);
   
  interface User {
    id: string,
    name: string,
    email: string,
    contact: number
  }
  const getConfig = {
    url: "https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
    method: "get"
  }
  async function handleUserButton(): Promise<void> {
    const userData = await axios<User[]>(getConfig);
    console.log(userData.data);
    setGetData(userData.data);
     console.log(handleHideButton.current);
    console.log(handleShowButton.current);
    if(handleHideButton.current && handleShowButton.current &&  refUserButton.current){
          handleShowButton.current.style.display="none";
    handleHideButton.current.style.display="block";
      refUserButton.current.style.display="flex";
    }

  }
  function handleDeleteButton():void{
    if(handleHideButton.current && handleShowButton.current &&  refUserButton.current){
    handleShowButton.current.style.display="block";
     handleHideButton.current.style.display="none";
     refUserButton.current.style.display="none";
     console.log(refUserButton.current.style.display);
    }
  }
  return (
    <div className='bg-linear-to-br from-blue-50 via-white to-purple-50 my-28 flex flex-col justify-center items-center  mx-6'>
      <div className='flex flex-col justify-between items-center gap-6'>
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"User Credentials"} />
       <Description style={'text-gray-500 min-[1080px]:text-5xl min-[380px]:text-3xl text-md text-center'} description={"This application is designed to collect, store, and manage user data securely. It supports structured data entry, efficient storage, and seamless access to information for reliable data management."}/>
        <Button title={"Show Users"} functionName={handleUserButton} ref={handleShowButton} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} />
        <Button title={"Hide Users"} functionName={handleDeleteButton} ref={handleHideButton} style={'hidden bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} />

      </div>

      <div className='flex flex-row justify-evenly items-center  flex-wrap space-y-5 ' ref={refUserButton}>
        {getdata.map((items) => {
          return (
            <div key={items.id} className='rounded-2xl shadow-2xs shadow-blue-950 flex flex-col justify-between items-center w-[30%] min-[375px]:w-[80%] min-[344px]:w-[90%] py-4 min-[853px]:w-[40%] min-[768px]:w-[40%] '>
              <p className=' text-gray-600 text-2xl '><b>Name:</b>{items.name}</p>
              <p className='text-2xl text-gray-600'><b>Email Address:</b>{items.email}</p>
              <p className='text-2xl text-gray-600'><b>Contact No:</b>{items.contact}</p>
              <div className='flex flex-row justify-around items-center gap-4'>
                <Button title={"Edit"}  style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 px-8 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} />
                <Button title={"Delete"}  style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Users
