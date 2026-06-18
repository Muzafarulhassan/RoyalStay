import React from 'react'

function HeroSection() {
  return (
    <div className="bg-[url('/images/room.jpg')]   h-[100vh]  bg-cover bg-center flex items-center " id='home'>
      <div>
      <h1 className="bg-black/40 text-2xl object-center pl-25 text-white" >Welcome to luxuary room</h1>
      <h2 className="bg-black/40 text-6xl w-140 p-6 text-white">Experience luxury like<span className=" text-6xl text-amber-300">never before</span></h2>
</div>
    </div>
  )
}

export default HeroSection

