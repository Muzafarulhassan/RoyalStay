import AboutSection from '@/Component/AboutSection'
import React from 'react'

function Page() {
  return (
        <div className=' bg-olive-100  h-screen'>
     
     <div className="flex items-center bg-white shadow-md rouded-lg mt-20">
          
         
            
            <div>
                <h1 className="text-3xl font-bold pt-8 text-black">Welcome Back,Admin </h1>
                <p className=" text-gray-600 mb-8">Here you can manage your hotel bookings, rooms, and services.</p>
               

              
            </div>
     
            <div className=" rounded-full w-12 h-12 items-center ml-auto">
                <img   className=" rounded-full "  height={20} width={40} src="Images/muzafar.jpeg" alt="Admin" />
                </div>
    
        </div>
         <AboutSection/>
        </div>
  )
}

export default Page
