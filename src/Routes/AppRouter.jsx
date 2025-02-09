import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookAppointment from '../Shared/Components/BookAppointmentComponents/BookAppointmentComponent';
import Main from '../Components/Main/Main';
import Home from '../Components/Home/Home';
import GalleryComponent from '../Shared/Components/GallaryComponents/GallaryComponents';
import ContactUsComponent from '../Shared/Components/ContactUsComponents/ContactUsComponent';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<BookAppointment />} />
          <Route path='/gallary' element={<GalleryComponent />}/>
          <Route path='/contact' element={<ContactUsComponent />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
