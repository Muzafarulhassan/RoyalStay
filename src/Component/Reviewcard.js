import React from 'react'

function Reviewcard({id,title,image}) {
  return (
    <div className='  bg-white text-black  grid-cols-4 max-w-sm  w-100   rounded-xl  p-4 mt-3 hover:shadow-xl transition-shadow duration-300 hover:scale-105'>
      <span>{id}</span>
      <p className='w-90'>{title}</p>
      <img src={image} className='h-20 w-20 rounded-full'/>

    </div>
  )
}

export default Reviewcard
