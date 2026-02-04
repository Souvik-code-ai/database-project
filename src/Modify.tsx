//import React from 'react'
import Button from "./Button"
import axios from "axios";
import { useState } from "react"
import Heading from "./Heading";
import { useRef } from "react";
const Modify = () => {
      const [nameValue,setNameValue]=useState<string>("");
    const [emailValue,setEmailValue]=useState<string>("");
    const [contactValue,setContactValue]=useState<string>("");
    const [responseData,setResponseData]=useState<User[]>([]);
      // const handleShowButton=useRef<HTMLButtonElement|null>(null);
        // const handleHideButton=useRef<HTMLButtonElement|null>(null);
        const refUserButton=useRef<HTMLDivElement|null>(null);
    interface User{
        id:string;
        name:string;
        email:string;
        contact:string
    }

    
    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>):void{
      console.log(e.target.name);
      console.log(e.target.value);
   


    }
    async function showUser():Promise<void>{
        const getAllUsers={
            url:"https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
            method:"get"
        }
        try{
             const getResponse=await axios<User[]>(getAllUsers);
        console.log(getResponse.data);
        console.log([...responseData,getResponse.data])

        setResponseData([...responseData,getResponse.data]);
    
        }
        catch(err){
            console.log(err);
        }
    }  
  return (
    <div className="flex flex-col justify-center items-center gap-7 top-50 min-[1000px]:w-[50%] min-[1000px]:mx-80 shadow-blue-800 shadow-2xl rounded-2xl mt-30">
         <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl mt-35'} headingTitle={"User Modification Page"}/>
                
       <input type="text" placeholder='Enter Name' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] ' name="email" value={nameValue} onChange={handleInputChange}/>
       <input type="text" placeholder='Enter Email' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] '  name="email" value={emailValue} onChange={handleInputChange}/>
      <input type="text" placeholder='Enter Contact No.' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] '  name="contact" value={contactValue} onChange={handleInputChange}/>
      <div className="flex flex-row justify-center items-center gap-6 ">
          <Button title={"Edit User"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 px-6 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={editUser}/>
            <Button title={"Show Users"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={showUser}/>
      </div>
       <div className='flex flex-row justify-evenly items-center  flex-wrap space-y-5 ' ref={refUserButton}>
        {responseData.map((items:User) => {
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

export default Modify
