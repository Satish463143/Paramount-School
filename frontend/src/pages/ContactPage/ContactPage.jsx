import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import React from 'react'
import ContactInformation from '@/components/section/ContactSection/ContactInformation'
import ContactForm from '@/components/section/ContactSection/ContactForm'
import DepartmentContact from '@/components/section/ContactSection/DepartmentContact'
import MapIntegration from '@/components/section/ContactSection/MapIntegration'
import contactBanner from '../../../public/contactBanner.jpg'

const ContactPage = () => {
  return (
    <div>
      <CommonBanner
        title="Get in"
        bgImage={contactBanner}
        subtitle="We’re here to help you with admissions, academics, and any questions you may have."
        subtitle2="Touch"
      />
      <ContactInformation/>
      <ContactForm/>
      <DepartmentContact/>      
      <MapIntegration/>
    </div>
  )
}

export default ContactPage

