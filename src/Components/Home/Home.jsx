import React from 'react'
import HomeComponent from '../../Shared/Components/HomeComponents/HomeComponent'
import AboutComponent from '../../Shared/Components/AboutComponents/AboutComponent'
import OurServicesComponent from '../../Shared/Components/OurServicesComponents/OurServicesComponent'
import OurMedicalTeamComponent from '../../Shared/Components/OurMedicalTeamComponents/OurMedicalTeamComponent'
import HomeAppointmentComponent from '../../Shared/Components/HomeComponents/HomeAppointmentComponent'
import TestimonialComponents from '../../Shared/Components/TestimonialComponents/TestimonialComponents'
import TimeLocationComponents from '../../Shared/Components/HomeComponents/TimeLocationComponents'

export default function Home() {
  return (
    <div>
        {/* <HeaderComponent /> */}
        <HomeComponent />
        <AboutComponent />
        <OurServicesComponent />
        <OurMedicalTeamComponent />
        <TestimonialComponents />
        <TimeLocationComponents />
        <HomeAppointmentComponent />
        {/* <FooterComponent /> */}
    </div>
  )
}
