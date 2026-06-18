import Data from '@/Data/Data'
import React from 'react'
import CardData from './CardData'

function CardSection() {
  return (
    <div className=' w-full gap-9 grid grid-cols-3 bg-znic-100  bg-white  text-black  py-20 '>
         {Data.map((item) => (
          <CardData
            key={item.id}
            image={item.image}
            title={item.title}
            prize={item.prize}
            night={item.night}
           
          />
        ))}

    </div>
  )
}

export default CardSection
