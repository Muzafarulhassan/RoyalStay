import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-black rounded-4xl w-200 ml-90 '>
        <div className='display-inline flex h-15 mt-2 pt-2'>
    <p  className="  text-yellow-200  ml-5 text-3xl ">Luxury rooms</p> 
        <Link href="/" className="pl-40   transition-shadow duration-300 hover:scale-105  text-2xl text-white">Home</Link>
        <Link href="/# CardData" className="pl-5  duration-300 hover:scale-105   text-2xl text-white">Room</Link>
        <Link href="/# Booking" className="pl-5    duration-300 hover:scale-105  text-2xl text-white">Booking</Link>


    </div>
    </div>
  )
}

export default Navbar
