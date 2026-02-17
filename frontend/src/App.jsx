import React, { useEffect } from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/HomePage/HomePage'
import { ThemeProvider } from './components/common/Theme/ThemeProvider'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from './pages/AboutPage/AboutPage'
import AcademicsPage from './pages/AcademicsPage/AcademicsPage'
import AdmissionPage from './pages/AdmissionPage/AdmissionPage' 
import FacilitiesPage from './pages/FacilitiesPage/FacilitiesPage'
import EventsAndNoticePage from './pages/EventsAndNoticePage/EventsAndNoticePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AnalyticsTracker from './components/AnalyticsTracker/AnalyticsTracker'
import CheckPermission from './config/rbac.config'
import CMSLayout from './pages/AdminPage/CMSLayout'
import Dashboard from './components/CMS/Dashboard/Dashboard'
import ContactList from './components/CMS/Contact/ContactList'
import BannerAdd from './components/CMS/Banner/BannerAdd'
import BannerEdit from './components/CMS/Banner/BannerEdit'
import Login from './components/CMS/Login/Login'
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './reducer/user.reducer';
import BannerList from './components/CMS/Banner/BannerList'
import TeamList from './components/CMS/Team/TeamList'
import TeamAdd from './components/CMS/Team/TeamAdd'
import TeamEdit from './components/CMS/Team/TeamEdit'
import TestimonalList from './components/CMS/Testimonal/TestimonalList'
import TestimonalAdd from './components/CMS/Testimonal/TestimonalAdd'
import TestimonalEdit from './components/CMS/Testimonal/TestimonalEdit'
import NoticeList from './components/CMS/Notice/NoticeList'
import NoticeAdd from './components/CMS/Notice/NoticeAdd'
import NoticeEdit from './components/CMS/Notice/NoticeEdit'
import EventsList from './components/CMS/Events/EventsList'
import EventsAdd from './components/CMS/Events/EventsAdd'
import EventsEdit from './components/CMS/Events/EventsEdit'
import GalleryList from './components/CMS/Gallery/GalleryList'
import GalleryAdd from './components/CMS/Gallery/GalleryAdd'
import GalleryCategoryAdd from './components/CMS/Gallery/GalleryCategoryAdd'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'


const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Rehydrate user data if token exists
    const token = localStorage.getItem('_at');
    if (token) {
      dispatch(getLoggedInUser());
    }
  }, [dispatch]);
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="paramount-theme">
      <ScrollToTop />
      <AnalyticsTracker/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutPage />} />
            <Route path='academics' element={<AcademicsPage />} />
            <Route path='admissions' element={<AdmissionPage />} />
            <Route path='facilities' element={<FacilitiesPage />} />
            <Route path='events-notices' element={<EventsAndNoticePage />} />
            <Route path='gallery' element={<GalleryPage />} />
            <Route path='contact-us' element={<ContactPage />} />
            <Route path="*" element={<>Page not Found</>} />
          </Route>
          {/* Admin routes */}
          <Route path='/admin'>
             <Route index element={<Login />} />
             <Route element={<CheckPermission allowedBy={"admin"}><CMSLayout /></CheckPermission>}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='banner' element={<BannerList />} />
                <Route path='contact' element={<ContactList />} />
                <Route path='add_banner' element={<BannerAdd />} />
                <Route path='edit_banner/:id' element={<BannerEdit />} />
                <Route path='team' element={<TeamList />} />
                <Route path='add_team' element={<TeamAdd />} />
                <Route path='edit_team/:id' element={<TeamEdit />} />
                <Route path='testimonal' element={<TestimonalList />} />
                <Route path='add_testimonal' element={<TestimonalAdd />} />
                <Route path='edit_testimonal/:id' element={<TestimonalEdit />} />
                <Route path='notice' element={<NoticeList />} />
                <Route path='add_notice' element={<NoticeAdd />} />
                <Route path='edit_notice/:id' element={<NoticeEdit />} />
                <Route path='events' element={<EventsList />} />
                <Route path='add_events' element={<EventsAdd />} />
                <Route path='edit_events/:id' element={<EventsEdit />} />
                <Route path='gallery' element={<GalleryList />} />
                <Route path='add_gallery' element={<GalleryAdd />} />
                <Route path='add_gallery_category' element={<GalleryCategoryAdd />} />
                <Route path="*" element={<>Page not Found</>} />
             </Route>
          </Route>
        </Routes>
    </ThemeProvider>
  )
}

export default App