import React from 'react'
import Header from '../components/global/Header'
import SideBar from '../components/global/SideBar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='bg-gray-100 min-h-screen '>
            <Header />
            <div className='lg:flex lg:gap-10 '>
                <div >
                    <SideBar />
                </div>
                
                <div className='lg:ml-64 mt-5 flex-auto sm:mx-10 mx-2  w-auto'>
                    <Outlet />
                </div>
                
            </div>

        </div>
    )
}

export default Dashboard