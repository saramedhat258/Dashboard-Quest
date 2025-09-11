import React from 'react'
import Button from '../components/Reusable/Button'

function Profile() {
    return (
        <div className="my-32 p-5 bg-white relative overflow-x-auto shadow-md rounded-lg lg:w-1/2 sm:w-3/4 w-11/12 m-auto">
            <p className='text-3xl text-center font-semibold mb-5'>your loged in <span className='text-blue-500'>data</span> </p>
            <form  className='sm:w-3/4 m-auto'>
                <div className="my-3">
                    <input type="text" placeholder='Name' disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                </div>
                <div className="my-3">
                    <input type="Email" placeholder='Email' disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                </div>
                <div className="my-3">
                    <input type="Password" placeholder='**********' disabled className="w-full rounded-lg p-3 mt-2 bg-gray-100 border border-gray-300 outline-0" />
                    {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                </div>
                <div className='flex justify-between items-center mt-10'>
                    <p className=' text-gray-700'>Would you like to logout?</p>
                    <Button btnName='Logout' className='bg-red-500 w-1/2'/>
                </div>
            </form>
        </div>
    )
}

export default Profile