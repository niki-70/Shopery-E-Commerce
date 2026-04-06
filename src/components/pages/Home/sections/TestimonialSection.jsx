import React from 'react'
import testimonial from '../../../../assets/Data/testimonial'
import TestimonialCard from '../../../common/TestimonialCard/TestimonialCard'

const TestimonialSection = () => {
  return (
    <div>
    {testimonial.map((card) => { 
        return(
            <TestimonialCard
            key={card.id}
            name={card.name}
            message={card.message}
            pfp={card.pfp}
            type={card.type}
        />
        )
    })}    
    </div>
  )
}

export default TestimonialSection
