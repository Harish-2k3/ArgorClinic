import React from 'react'
import Header from '../../core/Header/Header'
import Footer from '../../core/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
