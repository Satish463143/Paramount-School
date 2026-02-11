import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/HomePage/HomePage'
import { ThemeProvider } from './components/common/Theme/ThemeProvider'
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from './pages/AboutPage/AboutPage'
import AcademicsPage from './pages/AcademicsPage/AcademicsPage'
import AdmissionPage from './pages/AdmissionPage/AdmissionPage' 
import FacilitiesPage from './pages/FacilitiesPage/FacilitiesPage'


const App = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="paramount-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about-us' element={<AboutPage />} />
            <Route path='academics' element={<AcademicsPage />} />
            <Route path='admissions' element={<AdmissionPage />} />
            <Route path='facilities' element={<FacilitiesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App