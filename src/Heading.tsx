import React from 'react'

const Heading = ({headingTitle,style}) => {
  return (
    <div>
      <h1 className={style}>{headingTitle}</h1>
    </div>
  )
}

export default Heading
