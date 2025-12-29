import React from 'react'
import { Sidebar } from 'react-pro-sidebar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div>
     <div className="d-flex vh-100">
        <Sidebar/>
        <div className="w-100">
          <Navbar/>
          <Outlet/>
      </div>
     </div>
    </div>
  )
}
