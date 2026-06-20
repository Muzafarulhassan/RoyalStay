import React from 'react'

function Hcard({id,title,text,image}) {
  return (
    <div className='text-black bg-white flex mt-5'>
      <div>
      <h1 className='mt-15 text-black font-serif w-90 font-2xl'>{title}
       </h1>
        <p className='w-120 mt-3  font-sans text-gray-800'>{text}</p>
        <ul className='mt-10'>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' /> Luxury rooms</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />24/7 room service</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />Spacious lounges</li>
           <li className='flex items-center gap-2 '><img src="/Images/check.png" alt="check" className='h-5 w-5' />Concierge servicesev</li>
        </ul>
        </div>
      <div className='flex'>
     <img src={image} className='  h-90 w-200 ml-100 mt-10'/>
     </div>


     
    </div>
  )
}

export default Hcard
