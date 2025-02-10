import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import BookAppointment from '../Shared/Components/BookAppointmentComponents/BookAppointmentComponent';
import Main from '../Components/Main/Main';
import Home from '../Components/Home/Home';
import GalleryComponent from '../Shared/Components/GallaryComponents/GallaryComponents';
import ContactUsComponent from '../Shared/Components/ContactUsComponents/ContactUsComponent';
import StatsComponent from '../Shared/Components/StatsComponents/StatsComponent';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="mt-15"> {/* Add margin to avoid overlap with fixed header */}
        <Routes>
          <Route element={<Main />}>
            <Route path='/' element={<Home />} />
            <Route path='/appointment' element={<BookAppointment />} />
            <Route path='/gallary' element={<GalleryComponent />} />
            <Route path='/contact' element={<ContactUsComponent />} />
            <Route path='/achievement' element={<StatsComponent />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
