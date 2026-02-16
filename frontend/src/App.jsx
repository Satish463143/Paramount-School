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
import BannerList from './components/CMS/Banner/BannerList'
import BannerAdd from './components/CMS/Banner/BannerAdd'
import BannerEdit from './components/CMS/Banner/BannerEdit'
import Login from './components/CMS/Login/Login'



import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './reducer/user.reducer';

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
                <Route path='add_banner' element={<BannerAdd />} />
                <Route path='edit_banner/:id' element={<BannerEdit />} />
                <Route path="*" element={<>Page not Found</>} />
             </Route>
          </Route>
        </Routes>
    </ThemeProvider>
  )
}

export default App