import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import React from 'react'
import AcademicInfrastructure from '../../components/section/FacilitiesSection/AcademicInfrastructure'
import LearningFacilities from '../../components/section/FacilitiesSection/LearningFacilities'
import PhysicalFacilities from '../../components/section/FacilitiesSection/PhysicalFacilities'
import SafetySecurity from '../../components/section/FacilitiesSection/SafetySecurity'
import Cleanliness from '../../components/section/FacilitiesSection/Cleanliness'
import CampusEnvironment from '../../components/section/FacilitiesSection/CampusEnvironment'
import ClosingCTA from '../../components/common/CTA/ClosingCTA'

const FacilitiesPage = () => {
  return (
    <div>
        <CommonBanner
        title="Facilities That Support"
        subtitle2="Learning and Growth"
        subtitle="From modern classrooms to safe recreational spaces, our infrastructure ensures students learn, explore, and grow in a well-structured environment."
        />
        <AcademicInfrastructure/>
        <LearningFacilities/>
        <PhysicalFacilities/>
        <SafetySecurity/>
        <Cleanliness/>
        <CampusEnvironment/>
        <ClosingCTA/>
    </div>
  )
}

export default FacilitiesPage