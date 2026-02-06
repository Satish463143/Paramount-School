import React from 'react'
import Banner from '../../components/section/HomeSection/Banner'
import Highlights from '../../components/section/HomeSection/Highlights'
import About from '../../components/section/HomeSection/About'
import Message from '../../components/section/HomeSection/Message'
import AcademicOverview from '../../components/section/HomeSection/AcademicOverview'
import Facilities from '../../components/section/HomeSection/Facilities'
import Notice from '../../components/section/HomeSection/Notice'
import Events from '../../components/section/HomeSection/Events'
import Gallery from '../../components/section/HomeSection/Gallery'
import Testimonal from '../../components/section/HomeSection/Testimonal'
import CTA from '../../components/common/CTA/CTA'

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <Highlights/>
        <About/>
        <Message/>
        <AcademicOverview/>
        <Facilities/>
        <Notice/>
        <Events/>
        <Gallery/>
        <Testimonal/>
        <CTA/>
    </div>
  )
}

export default HomePage