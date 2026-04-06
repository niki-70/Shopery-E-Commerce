import React from 'react'
import category from '../../../../assets/Data/category'
import CategoryCard from '../../../common/CategoryCard/CategoryCard'

const CategorySection = () => {
  return (
    <div>
      {category.map((item) => {
        return(
            <CategoryCard  
            key={item.id}
            name={item.name}
            count={item.count}
            image={item.image}
            />
        )
      })}
    </div>
  )
}

export default CategorySection
