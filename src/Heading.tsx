// import React from 'react'
interface HeadingUser{
  headingTitle:string;
  style:string;
}
const Heading = ({headingTitle,style}:HeadingUser) => {
  return (
    <div>
      <h1 className={style}>{headingTitle}</h1>
    </div>
  )
}

export default Heading
