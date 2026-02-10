import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import AboutSchool from '@/components/section/AboutSection/AboutSchool'
import History from '@/components/section/AboutSection/History'
import Message from '@/components/section/AboutSection/Message'
import VisionAndMission from '@/components/section/AboutSection/VisionAndMission'
import CoreValues from '@/components/section/AboutSection/CoreValues'
import FacultyOverview from '@/components/section/AboutSection/FacultyOverview'
import Infrastructure from '@/components/section/AboutSection/Infrastructure'
import WhyChooseUs from '@/components/section/AboutSection/WhyChooseUs'
import ClosingCTA from '@/components/common/CTA/ClosingCTA'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <CommonBanner title="About " subtitle2="The School" subtitle="Our School is a place where students come to learn and grow. We offer a wide range of programs and activities to help students develop their full potential."/>
        <AboutSchool/>
         <VisionAndMission/>
         <Message/>
         <History/>
         <CoreValues/>
         <FacultyOverview/>
         <Infrastructure/>
         <WhyChooseUs/>         
         <ClosingCTA/>       
    </div>
  )
}

export default AboutPage