import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-white rounded-4xl    w-full m-auto  w-50 lg-w-350 md:w-200 sm:w-100'>
        <div className='display-inline flex h-15 mt-2 pt-2   lg-text-md md:text-sm sm:text-xs   '>
    <p className="  text-yellow-400  ml-5 text-xs lg-text-lg md:text-md sm:text-sm">Luxury rooms</p> 
        <Link href="/" className=" lg-ml-100 md:ml-80 sm:ml-50 ml-30 transition-shadow duration-300 hover:scale-105  text-xs lg-text-lg md:text-md sm:text-sm text-black">Home</Link>
        <Link href="/# CardData" className="pl-5  duration-300 hover:scale-105   text-xs lg-text-lg md:text-md sm:text-sm text-black">Room</Link>
        <Link href="/# Booking" className="pl-5    duration-300 hover:scale-105  text-xs lg-text-lg md:text-md sm:text-sm text-black">Booking</Link>


    </div>
    </div>
  )
}

export default Navbar
