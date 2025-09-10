import React from 'react'
import Header from '../components/global/Header'
import SideBar from '../components/global/SideBar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <Header />
            <div className='flex sm:gap-10'>
                <div >
                    <SideBar />
                </div>
                
                <div className='sm:ml-64 my-20'>
                    <Outlet />
                </div>
                
            </div>

        </div>
    )
}

export default Dashboard