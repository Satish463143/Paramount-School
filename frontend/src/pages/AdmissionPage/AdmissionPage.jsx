import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import ClosingCTA from '@/components/common/CTA/ClosingCTA'
import React from 'react'
import ImportantDates from '@/components/section/AdmissionSection/ImportantDates'
import RequiredDocuments from '@/components/section/AdmissionSection/RequiredDocuments'
import SchoolVisit from '@/components/section/AdmissionSection/SchoolVisit'
import WhoCanApply from '@/components/section/AdmissionSection/WhoCanApply'
import AdmissionProcess from '@/components/section/AdmissionSection/AdmissionProcess'

const AdmissionPage = () => {
  return (
    <div>
        <CommonBanner
            title="Admission"
            subtitle="We welcome families seeking a safe, structured, and nurturing academic environment. Explore the steps to become part of our school community."
            subtitle2="Made Simple"
        />
        <WhoCanApply />
        <AdmissionProcess />
        <RequiredDocuments />
        <ImportantDates />
        <SchoolVisit />
        <ClosingCTA/>
    </div>
  )
}

export default AdmissionPage