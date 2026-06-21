'use-client'
import Link from 'next/link'
import React from 'react'

function Navbar() {

  return (
    <div className='h-20 bg-white '> 
      <span className="text-md font-serif justify-between font-bold text-black lg:text-3xl md:text-2xl md:text-xl ">Luxuary Room</span>
      <div className=' justify-evenly flex '>
        <Link  href='#home' className='justify-center lg:text-2xl md:text-xl sm:text-base  text-2xl font-serif text-black '> Home </Link>
        <Link href='#room' className=' font-serif text-2xl text-black lg:text-2xl md:text-xl sm:text-base'>Roomes</Link>
        <Link href="/about-us" className=" font-serif text-2xl text-black lg:text-2xl md:text-xl sm:text-base">About Us</Link>
        

      </div>
    </div>
  )
}

export default Navbar
