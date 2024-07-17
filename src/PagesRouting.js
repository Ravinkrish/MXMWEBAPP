import React from 'react'
import {Route, Routes} from "react-router-dom"
import Sidebar from './Layout/Sidebar';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home/Home';
import ViewEvents from './Pages/ViewEvents/ViewEvents';


const PagesRouting = () => {
  return (
    <Sidebar>
        <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='home' element={<Home />} />
            <Route path='events' element={<ViewEvents />} />
        </Routes>
    </Sidebar>
    
  )
}

export default PagesRouting
