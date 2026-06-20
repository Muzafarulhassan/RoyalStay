import HospitalityData, { HData } from '@/Data/HData'
import React from 'react'
// import Hospitalitycard from './Hcard'
import Hcard from './Hcard'

function HSection() {
  return (
    <div className=' text-black  '>
       
        {HData.map((item)=>(
          <Hcard
          key={item.id}
          title={item.title}
           text={item.text}
            image={item.image}
          
          
          />
        ))}
    </div>
  )
}

export default HSection
