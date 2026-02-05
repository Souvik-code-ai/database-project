import React from 'react'
import Description from './Description'
import Heading from './Heading'
import logo from "./assets/6490031.jpg"
import axios from 'axios'

// import Heading from './Heading'
import Button from './Button'
import { useState,useEffect } from 'react'
import Status, { UnseccessfulStatus } from './Status'
const Login = () => {
  interface User {
    id: string,
    name: string,
    email: string,
    contact: string,

  }

  const [nameValue, setNameValue] = useState<string>("")
  const [contactValue, setContactValue] = useState<string>("")
  const [details, setDetails] = useState<Partial<User>>({});
  // const [responseData, setResponseData] = useState<User[]>([]);
  const [getData,setGetData]=useState<User[]>([]);
  const [val,setVal]=useState<boolean|null>(null);
  const getConfig = {
    url: "https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
    method: "get"
  }
    async function handleUserButton(): Promise<void> {
    const userData = await axios<User[]>(getConfig);
    console.log(userData.data);
    setGetData(userData.data);
   

  }
  useEffect(()=>{
    handleUserButton();
  },[]);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.name);
    console.log(e.target.value);
    
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
    if (e.target.name === "email") {
      setNameValue(e.target.value);
      localStorage.setItem("email",e.target.value);
    }
    else if (e.target.name === "contact") {
      setContactValue(e.target.value);
       localStorage.setItem("contact",e.target.value);
    }
  

  }

    async function postData():Promise<void> {
      if (nameValue === "" || contactValue === "") {
        alert("Email and contact should never be blank");
        return;
      }
      const email=localStorage.getItem("email");
      const contact=localStorage.getItem("contact");
      console.log(email,contact);
      for(const i in getData)
      {
        if(getData[i].email===email){
          if(getData[i].contact===contact){
            setVal(true);
          }
          else{
            setVal(false);
          }
        }
        else {
          setVal(false);
        }

      }
      setNameValue("");
      setContactValue("");
      localStorage.clear();
    }

  return (
    <div className='bg-linear-to-br min-[1000px]:w-[50%]  from-blue-50 via-white to-purple-50 flex flex-col justify-between items-center space-y-9 shadow-2xl min-[1000px]:mx-80 py-12 pt-30'>
      {/* <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"User Credentials"}/> */}
      <div className='flex flex-row justify-around items-center mx-15 rounded-2xl '>
        <img src={logo} alt="" className='h-10 w-10 rounded-2xl ' />
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1000px]:text-4xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-2xl'} headingTitle={"Login to App"} />
      </div>
      <Description style={'text-gray-500 min-[1080px]:text-5xl min-[380px]:text-3xl text-md text-center min-[344px]:mx-9 min-[375px]:mx-6 min-[768px]:mx-10'} description={'Securely access your account with your email and contact number.Fast,simple and protected login to get you started.'} />
      <input type="text" placeholder='Enter email' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] ' onChange={handleInputChange} name="email" value={nameValue} />
      <input type="text" placeholder='Enter Contact No.' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] ' onChange={handleInputChange} name="contact" value={contactValue} />
      
        <Button title={"Submit"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={postData}/>
      
      {val===true && <Status/>}{ val===false && <UnseccessfulStatus/>}
     
    
    </div>
  )
}

export default Login;

