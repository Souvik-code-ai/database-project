import React from 'react'

const Login = () => {
  return (
    <div className='bg-linear-to-br  bg-linear-to-br from-blue-50 via-white to-purple-50 '>
      <h1>Login Form</h1>
      <input type="text" placeholder='Enter email'/>
      <input type="password" placeholder='Enter password' />
      <button className='from-blue-500 to-purple-600 rounded-2xl'>Submit</button>
    </div>
  )
}

export default Login

