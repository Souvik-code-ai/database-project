import React from 'react'

const Button = ({title}) => {
  return (
    <div>
            <button className='bg-linear-to-br from-blue-500 to-purple-600 flex flex-row justify-center items-center p-3 rounded-2xl cursor-pointer text-amber-50 text-center text-3xl '>{title}</button>
    </div>
  )
}

export default Button
