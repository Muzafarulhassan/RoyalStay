import React from 'react'

function HeroSection() {
  return (
    <div className="bg-[url('/Images/room.jpg')]   h-[100vh]  bg-cover bg-center  flex items-center " id='home'>
      <div>
      <h1 className="bg-black/40 text-sm object-center pl-25 text-white lg:text-3xl md:text-2xl sm:text-xl sm:w-lg" >Welcome to luxuary room</h1>
      <h2 className="bg-black/40 text-sm w-140 p-6 text-white lg:text-5xl md:text-2xl sm:text-xl">Experience luxury like<span className=" lg:text-5xl md:text3xl sm:text-xl text-sm text-amber-300">never before</span></h2>
</div>
    </div>
  )
}

export default HeroSection

