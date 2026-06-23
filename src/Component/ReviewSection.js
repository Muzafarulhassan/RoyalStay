import React from 'react'
import Reviewcard from './Reviewcard'
import ReviewData from '@/Data/ReviewData'

function ReviewSection() {
  return (
    <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  grid-cols-1 text-black mt-5' >
        {ReviewData.map((item) => (
                  <Reviewcard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                  />
                ))}
    </div>
  )
}

export default ReviewSection
