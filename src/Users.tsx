import  { useRef,useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Button from './Button'
import Heading from './Heading'
import Description from './Description'
// import { url } from 'inspector'
const Users = () => {
    interface User {
    id: string;
    name: string;
    email: string;
    contact: string;
  }
  const [getdata, setGetData] = useState<User[]>([]);
  const [postData, setPostData] = useState<Partial<User>>({});
  const [name,setName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [contact,setContact]=useState<string>("");
  const getConfig = {
    url: "https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
    method: "get"
  }
  const refForm=useRef<HTMLFormElement|null>(null);
  const refAddUserButton=useRef<HTMLButtonElement|null>(null);
  async function handleUserButton(): Promise<void> {
    const userData = await axios<User[]>(getConfig);
    console.log(userData.data);
    setGetData(userData.data);
   

  }
  useEffect(()=>{
    handleUserButton();
  },[]);
 function handleAddUser():void{
  console.log(refForm.current);
  if(refForm.current && refAddUserButton.current)
  {
  refForm.current.style.display="flex";
  refAddUserButton.current.style.display="none";
  }
 }
  function handleBackButton(e: React.MouseEvent<HTMLButtonElement>):void{
    // console.log(e);
    e.preventDefault();
  console.log(refForm.current);
  if(refForm.current && refAddUserButton.current)
  {
     refForm.current.style.display="none";
     refAddUserButton.current.style.display="flex";
  }
 
 }
 async function handleSubmitButton(e: React.MouseEvent<HTMLButtonElement>):Promise<void> {
  console.log(e);
  const postconfig={
    url:"https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
    method:"post",
    data:postData

  }
  const postResponseData=await axios(postconfig);
  console.log(postResponseData.data);

  
 }
 function handleInputChange(e:React.ChangeEvent<HTMLButtonElement>):void{
  // console.log(e);
  console.log(e.target.name);
  console.log(e.target.value);
  if((e.target.name)==="name"){
    setName(e.target.value);
    setPostData({...postData,[e.target.name]:name})
  }
  else if((e.target.name)==="email"){
    setEmail(e.target.value);
    setPostData({...postData,[e.target.name]:email})
  }
  else if((e.target.name)==="contact"){
    setContact(e.target.value);
    setPostData({...postData,[e.target.name]:contact})
  }
  console.log(postData);
 }
  
 

  return (
    <div className='bg-linear-to-br from-blue-50 via-white to-purple-50 my-28 flex flex-col justify-center items-center  mx-6'>
      <div className='flex flex-col justify-between items-center gap-6'>
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"User Credentials"} />
       <Description style={'text-gray-500 min-[1080px]:text-5xl min-[380px]:text-3xl text-md text-center'} description={"This application is designed to collect, store, and manage user data securely. It supports structured data entry, efficient storage, and seamless access to information for reliable data management."}/>
        <Button title={"Add User"}   style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} functionName={handleAddUser} ref={refAddUserButton}/>

      </div>
      {/* <p>{handleUserButton()}</p> */}
      <div className='flex flex-row justify-evenly items-center  flex-wrap space-y-5 ' >
        {getdata.map((items:User) => {
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
      <form action="" className='hidden flex-col justify-center items-center space-y-10 shadow-2xl shadow-blue-800 rounded-4xl py-10' ref={refForm}>
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"Add User Credentials"} />
        <input type="text" placeholder='Enter Name' name='name' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' value={name} onChange={handleInputChange}/>
        <input type="text" placeholder='Enter Email Address' name='email' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2  ' value={email} onChange={handleInputChange}/>
        <input type="text" placeholder='Enter Contact No' name='contact' value={contact} className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' onChange={handleInputChange}/>
        <div className='flex flex-row justify-center items-center space-x-8'>
          <Button title={"Back"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={handleBackButton}/>
           <Button title={"Submit"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={handleSubmitButton}/>
        </div>
      </form>
   

    </div>
  )
}

export default Users
