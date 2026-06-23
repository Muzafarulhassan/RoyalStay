import React from 'react'
import AboutHeroData from '@/Data/AboutHeroData'
import AboutCard from './AboutCard'

function AboutSection() {
  return (
    <div className=' grid  lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1  grid-cols-1 text-black   '>
       {AboutHeroData.map((item) => (
          <AboutCard
            key={item.id}
            title={item.title}
            profit={item.profit}
            number={item.number}
            percentage={item.percentage}
          />
        ))}
    </div>
  )
}

export default AboutSection
