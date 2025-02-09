import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../Shared/Components/HeaderComponents/HeaderComponent'
import FooterComponent from '../../Shared/Components/FooterComponents/FooterComponent'

export default function Main() {
  return (
    <div>
        <HeaderComponent />
        <main>
            <Outlet />
        </main>
        <FooterComponent />
    </div>
  )
}
