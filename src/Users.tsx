import {  useRef,useEffect } from 'react'
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
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [showAddUser, setShowAddUser] = useState<boolean | null>(null);

  const getConfig = {
    url: "https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
    method: "get"
  }
 
  const refAddUserButton = useRef<HTMLButtonElement | null>(null);
  async function handleUserButton(): Promise<void> {
    const userData = await axios<User[]>(getConfig);
    console.log(userData.data);
    setGetData(userData.data);


  }
  useEffect(() => {
    handleUserButton();
  }, []);
  function handleAddUser(): void {
    setShowAddUser(true);
  }
  function handleBackButton(e: React.MouseEvent<HTMLButtonElement>): void {
    // console.log(e);
    e.preventDefault();
    setShowAddUser(false);

  }
  async function handleSubmitButton(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(contact);
    if (name === "" && email === "" && contact === "") {
      alert("Name or Email or Contact can never be blank.");
      return;
    }
    console.log(e);
    console.log(postData);
    const postconfig = {
      url: "https://6981a2a6c9a606f5d4475ec2.mockapi.io/users",
      method: "post",
      data: postData

    }
    const postResponseData = await axios(postconfig);
    console.log(postResponseData.data);
    setName("");
    setEmail("");
    setContact("");
    setShowAddUser(false);
    handleUserButton();


  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);

    console.log(postData);
    // const newValue:string=e.target.value;
    if ((e.target.name) === "name") {
      setName(e.target.value);
      setPostData((postData) => {
        const newPostData = { ...postData, [e.target.name]: e.target.value };
        // console.log(newPostData);
        // console.log(postData);
        return newPostData;
      });

    }
    else if ((e.target.name) === "email") {
      setEmail(e.target.value);
      setPostData((postData) => {
        const newPostData = { ...postData, [e.target.name]: e.target.value };
        // console.log(newPostData);
        // console.log(postData);
        return newPostData;
      });
    }
    else if ((e.target.name) === "contact") {
      setContact(e.target.value);
      setPostData((postData) => {
        const newPostData = { ...postData, [e.target.name]: e.target.value };
        // console.log(newPostData);
        // console.log(postData);
        return newPostData;
      });
    }
    // console.log(postData);

  }
  async function handleDeleteButton(items: User) {
    const deleteConfig = {
      url: `https://6981a2a6c9a606f5d4475ec2.mockapi.io/users/${items.id}`,
      method: "delete",

    }
    const deleteResponse = await axios(deleteConfig);
    console.log(deleteResponse);
    handleUserButton();
  }
  function handleEditButton(items: User) {
    setName(items.name);
    setEmail(items.email);
    setContact(items.contact);
    localStorage.setItem("id", items.id);


  }
  async function handleCommitChange() {
    const id = localStorage.getItem("id");
    if (!id) {
      return;

    }
    const putData = { name: name, email: email, contact: contact };
    const putConfig = {
      url: `https://6981a2a6c9a606f5d4475ec2.mockapi.io/users/${id}`,
      method: "put",
      data: putData

    }
    const putResponse = await axios(putConfig);
    console.log(putResponse);
    setName("");
    setEmail("");
    setContact("");
    handleUserButton();

  }


  return (
    <div className='bg-linear-to-br from-blue-50 via-white to-purple-50 my-28 flex flex-col justify-center items-center  mx-6'>
      <div className='flex flex-col justify-between items-center gap-6'>
        <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"User Credentials"} />
        <Description style={'text-gray-500 min-[1080px]:text-3xl min-[380px]:text-2xl text-md text-center'} description={"This application is designed to collect, store, and manage user data securely. It supports structured data entry, efficient storage, and seamless access to information for reliable data management."} />
        <Button title={"Add User"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} functionName={handleAddUser} ref={refAddUserButton} />

      </div>
      <div className='flex flex-col justify-between items-center space-y-3 w-[80%]'>
        <input type="text" placeholder='Enter Name' name='name' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' value={name} onChange={handleInputChange} />
        <input type="text" placeholder='Enter Email Address' name='email' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2  ' value={email} onChange={handleInputChange} />
        <input type="text" placeholder='Enter Contact No' name='contact' value={contact} className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' onChange={handleInputChange} />
        <Button title={"Commit Changes"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 px-8 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} functionName={() => handleCommitChange()} />

      </div>
      {/* <p>{handleUserButton()}</p> */}
      <div className='flex flex-row justify-evenly items-center  flex-wrap space-y-5 ' >
        {getdata.map((items: User) => {
          return (
            <div key={items.id} className='rounded-2xl shadow-2xs shadow-blue-950 flex flex-col justify-between items-center w-[30%] min-[375px]:w-[80%] min-[344px]:w-[90%] py-4 min-[853px]:w-[40%] min-[768px]:w-[40%] '>
              <p className=' text-gray-600 min-[380px]:text-xl text-md'><b>Name:</b>{items.name}</p>
              <p className=' text-gray-600 min-[380px]:text-xl text-md'><b>Email:</b>{items.email}</p>
              <p className=' text-gray-600 min-[380px]:text-xl text-md'><b>Contact:</b>{items.contact}</p>
              <div className='flex flex-row justify-around items-center gap-4'>
                <Button title={"Edit"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 px-8 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} functionName={() => handleEditButton(items)} />
                <Button title={"Delete"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl my-5'} functionName={() => handleDeleteButton(items)} />
              </div>
            </div>
          )
        })}
      </div>
      {
        showAddUser && <div className='fixed inset-0 bg-black/20 backdrop-blur-2xl flex justify-center items-center' >
          <form action="" className='flex flex-col justify-center items-center space-y-10 bg-linear-to-br from-blue-50 via-white to-purple-50 shadow-2xl shadow-blue-800 rounded-4xl py-10' >
            <Heading style={'bg-linear-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent  text-shadow-md min-[1080px]:text-6xl flex flex-row justify-center items-center text-center mx-5 min-[380px]:text-4xl text-3xl'} headingTitle={"Add User Credentials"} />
            <input type="text" placeholder='Enter Name' name='name' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' value={name} onChange={handleInputChange} />
            <input type="text" placeholder='Enter Email Address' name='email' className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2  ' value={email} onChange={handleInputChange} />
            <input type="text" placeholder='Enter Contact No' name='contact' value={contact} className='rounded-2xl w-[30%] h-12 p-5 min-[375px]:w-[80%] min-[344px]:w-[80%] hover:border-2 ' onChange={handleInputChange} />
            <div className='flex flex-row justify-center items-center space-x-8'>
              <Button title={"Back"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={handleBackButton} />
              <Button title={"Submit"} style={'bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-2xl '} functionName={handleSubmitButton} />
            </div>
          </form>

        </div>
      }




    </div>
  )
}

export default Users
