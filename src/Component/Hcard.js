import React from 'react'

function Hcard({id,title,text,image}) {
  
  return (
    <div className='text-black bg-white flex mt-5'>
      <div>
      <h1 className='mt-15 text-black font-serif  font-sm lg-text-lg md:text-md sm:text-sm'>{title}
       </h1>
        <p className=' mt-3 font-xs  font-sans text-gray-800 lg-text-md md:text-sm sm:text-xs'>{text}</p>
        <ul className='mt-20'>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' /> Luxury rooms</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />24/7 room service</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />Spacious lounges</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />Concierge servicesev</li>
        </ul>
        </div>
      <div className='h-90 w-50 gap-1  justify-end    lg:w-200 md:w-100 sm:w-50  mt-10  mb-10'>
     <img src={image} className='h-30 w-200  lg:h-80 md:h-70 sm:h-50  mt-10  mb-10'/>
     </div>


     
    </div>
  )
}

export default Hcard
