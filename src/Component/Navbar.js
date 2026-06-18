'use-client'
import Link from 'next/link'
import React from 'react'

function Navbar() {

  return (
    <div className='h-15 bg-white' > 
      <div><span className="text-2xl font-serif pt-30 text-black">Luxuary Room</span>
        <Link  href='#home' className='pl-120 text-2xl font-serif text-black '> Home </Link>
        <Link href='#room' className='pl-20 font-serif text-2xl text-black'>Roomss</Link>
        {/* <Link href='/about-Us' className='pl-20 font-serif text-2xl text-black'>About-Us</Link> */}
        <Link href="/about-us" className="pl-20 font-serif text-2xl text-black">About Us</Link>
        

      </div>
    </div>
  )
}

export default Navbar
