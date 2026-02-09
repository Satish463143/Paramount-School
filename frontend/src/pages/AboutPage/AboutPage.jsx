import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import About from '@/components/section/AboutSection/About'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <CommonBanner title="About " subtitle2="The School" subtitle="Our School is a place where students come to learn and grow. We offer a wide range of programs and activities to help students develop their full potential."/>
        <About/>
    </div>
  )
}

export default AboutPage