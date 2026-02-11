import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import ClosingCTA from '@/components/common/CTA/ClosingCTA'
import React from 'react'
import CategoryFilter from '@/components/section/GallerySection/CategoryFilter'
import MainImage from '@/components/section/GallerySection/MainImage'

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('events');

  return (
    <div>
        <CommonBanner
        title="Life at"
        subtitle="A window into the vibrant life at Paramount School, capturing the energy, creativity, and joy of our students."
        subtitle2="Our School"
        />
        <CategoryFilter onCategoryChange={setActiveCategory} />
        <MainImage activeCategory={activeCategory} />
        <ClosingCTA/>
    </div>
  )
}

export default GalleryPage