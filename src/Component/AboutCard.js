import React from 'react'

function AboutCard({id,title,number,profit,percentage}) {
  return (
    <div className='  bg-white text-black  grid-cols-4 max-w-sm  w-80   rounded-xl  p-4 mt-3 hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
      <span className='w-full bg-white '>{id}</span>
      <h1 className="text-1xl w-full text-gray-500 bg-white w-full">{title}</h1>
      <p className='text-2xl w-full bg-white w-full'>{number}</p>
      <span className='text-1xl w-full bg-white text-gray-500 w-full'> <span className='text-lime-400 '>{percentage}</span>{profit}  </span>

    </div>
  )
}

export default AboutCard
