import React, { useState } from 'react'
import Button from '../components/Reusable/Button'
import { useAuth } from '../context/AuthContext'
import Sucsses from '../components/notification/Success'

function Profile() {
    const { logout, authUser } = useAuth()
    const passLen = authUser.password.length
    const [success, setSuccess] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setSuccess(true)
        setTimeout(() => {
            logout()
        }, 1500);
    }
    return (
        <>
            <div className="my-32 p-5 bg-white relative overflow-x-auto shadow-md rounded-lg lg:w-1/2 sm:w-3/4 w-11/12 m-auto">
                <p className='text-3xl text-center font-semibold mb-5'>your logged in <span className='text-blue-500'>Data</span> </p>
                <form className='sm:w-3/4 m-auto'>
                    <div className="my-3">
                        <input type="text" placeholder={authUser.name} disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    </div>
                    <div className="my-3">
                        <input type="Email" placeholder={authUser.email} disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    </div>
                    <div className="my-3">
                        <input type="Password" placeholder={'*'.repeat(passLen)} disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    </div>
                    <div className='flex justify-between items-center mt-10'>
                        <p className=' text-gray-700'>Would you like to logout?</p>
                        <Button btnName='Logout' className='bg-red-500 w-1/2' handleClick={handleClick} />
                    </div>
                </form>
            </div>

            {success &&
                <Sucsses msg="Logged out successfully" />
            }
        </>
    )
}

export default Profile