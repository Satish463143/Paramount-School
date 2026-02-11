import CommonBanner from '@/components/common/CommonBanner/CommonBanner'
import ClosingCTA from '@/components/common/CTA/ClosingCTA'
import React from 'react'
import UpcomingEvents from '@/components/section/EventsAndNoticeSection/UpcomingEvents'
import LatestNotices from '@/components/section/EventsAndNoticeSection/LatestNotices'
import EventsGallery from '@/components/section/EventsAndNoticeSection/EventsGallery'

const EventsAndNoticePage = () => {
  return (
    <div>
        <CommonBanner
            title="School Updates &"
            subtitle="Explore important notices, scheduled programs, and student activities that keep our campus active and connected."
            subtitle2="Activities"
        />
        <UpcomingEvents/>
        <LatestNotices/>
        <EventsGallery/>
        <ClosingCTA/>
    </div>
  )
}

export default EventsAndNoticePage