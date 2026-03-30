import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import React from 'react'
import Philosophy from '@/components/section/AcademicSection/Philosophy'
import AcademicLevels from '@/components/section/AcademicSection/AcademicLevels'
import Curriculum from '@/components/section/AcademicSection/Curriculum'
import Assessment from '@/components/section/AcademicSection/Assessment'
import TeachingMethodology from '@/components/section/AcademicSection/TeachingMethodology'
import AcademicSupport from '@/components/section/AcademicSection/AcademicSupport'
import CoCurricular from '@/components/section/AcademicSection/CoCurricular'
import LearningResources from '@/components/section/AcademicSection/LearningResources'
import AcademicResults from '@/components/section/AcademicSection/AcademicResults'
import ClosingCTA from '@/components/common/CTA/ClosingCTA'
import academicBAnner  from '../../../public/academicBAnner.jpg'
const AcademicsPage = () => {
  return (
    <div>
        <CommonBanner
            title="Academic Excellence"
            bgImage={academicBAnner}
            subtitle="Our academic framework is designed to build strong foundations, foster curiosity, and nurture disciplined, confident learners at every stage of growth."
            subtitle2="With Purpose"
        />
        <Philosophy />
        <AcademicLevels />
        <Curriculum />
        <TeachingMethodology />
        <Assessment />       
        <AcademicSupport />
        <CoCurricular />
        <LearningResources />
        <AcademicResults />
        <ClosingCTA />
    </div>
  )
}

export default AcademicsPage