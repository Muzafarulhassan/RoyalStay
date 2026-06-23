import AboutSection from '@/Component/AboutSection'
import React from 'react'
import Navbar from '../../Component/AboutNavbar'
import HSection from '@/Component/HSection'
import ReviewSection from '@/Component/ReviewSection'


function Page() {
  return (
        <div className=' bg-black  '>
       <Navbar/>
     <div className="flex  items-center bg-white shadow-md rouded-lg mt-3">
          
         
            
            <div>
                <h1 className="text-sm font-bold pt-8 text-black lg-text-lg md:text-md sm:text-sm">Welcome Back,Admin </h1>
                <p className=" text-gray-600 mb-8 lg-text-lg md:text-md sm:text-sm ">Here you can manage your hotel bookings, rooms, and services.</p>
               

              
            </div>
     
            <div className=" rounded-full w-12 h-12 items-center ml-auto">
                <img   className=" rounded-full "  height={20} width={40} src="Images/muzafar.jpeg" alt="Admin" />
                </div>
    
        </div>
         <AboutSection/>
      <HSection/>
      <ReviewSection/>
         
      

        </div>
  )
}

export default Page
