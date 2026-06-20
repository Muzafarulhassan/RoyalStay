import React from 'react'
import Reviewcard from './Reviewcard'
import ReviewData from '@/Data/ReviewData'

function ReviewSection() {
  return (
    <div className='grid grid-cols-3 text-black mt-5 w-full' >
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
