import React from 'react'
import HomeComponent from '../../Shared/Components/HomeComponents/HomeComponent'
import HeaderComponent from '../../Shared/Components/HeaderComponents/HeaderComponent'
import AboutComponent from '../../Shared/Components/AboutComponents/AboutComponent'
import FooterComponent from '../../Shared/Components/FooterComponents/FooterComponent'
import OurServicesComponent from '../../Shared/Components/OurServicesComponents/OurServicesComponent'
import OurMedicalTeamComponent from '../../Shared/Components/OurMedicalTeamComponents/OurMedicalTeamComponent'
import HomeAppointmentComponent from '../../Shared/Components/HomeComponents/HomeAppointmentComponent'

export default function Home() {
  return (
    <div>
        {/* <HeaderComponent /> */}
        <HomeComponent />
        <AboutComponent />
        <OurServicesComponent />
        <OurMedicalTeamComponent />
        <HomeAppointmentComponent />
        {/* <FooterComponent /> */}
    </div>
  )
}
