import React from 'react'

function CardData({title,image,prize ,night}) {
  return (
    <div  className='bg-white text-black  gap-6  py-4 px-4 rounded-lg shadow-md'>
         <img src={image} className='rounded-xl hover:scale-105 w-90' />

      <h1 className='  p-2 mt-2 text-lg'>
        {title}
        <span className=' ml-40 text-orange-500 '>{prize} </span>
        <span>{night}</span>
        <span id='room'></span>
       </h1>

   
    </div>
  )
}

export default CardData
