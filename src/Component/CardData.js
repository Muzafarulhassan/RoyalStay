'use client'
import React from 'react'

function CardData({title,image,prize ,night}) {
    const [message, setMessage] = React.useState("");
  const showInfo = () => {
    setMessage("This is a popular room that offers great amenities and comfort for our guests. Book now to experience the best stay at our hotel!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  return (
    <div  className='bg-white text-black  gap-6  py-4 px-4 rounded-lg shadow-md'>
         <img src={image} className='rounded-xl hover:scale-105 w-90' />

      <h1 className='  p-2 mt-2 text-lg'>
        {title}
        <span className=' ml-40 text-orange-500 '>{prize} </span>
        <span>{night}</span>
        
      {message && <div>{message}</div>}
            <button className='bg-yellow-700 hover:bg-yellow-600 text-white w-90 mt-4 px-20 rounded-xl py-1 font-bold' onClick={showInfo}>view detilas</button>
        <span id='room'></span>
       </h1>

   
    </div>
  )
}

export default CardData
