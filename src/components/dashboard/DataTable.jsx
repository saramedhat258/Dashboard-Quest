import React, { useState } from 'react'
import Button from '../Reusable/Button'
import Search from './Search'
import Paginate from './Paginate'
import Modal from '../Reusable/Modal'
function DataTable() {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between py-5 text-left rtl:text-right text-gray-900'>
                <p className='text-lg  font-semibold'>
                    Users
                </p>
                <p>
                    <Button btnName='Create New User' className='bg-blue-500' handleClick={() => setModal(true)} />
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg">
                <div className='w-11/12 m-auto py-10 '>
                    <Search />
                    <div class="relative overflow-x-auto ">
                        <table className="w-full border border-gray-200 border-separate rounded-lg mb-2 text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase  bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className="bg-white border-b  border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 flex gap-2 justify-center">
                                        <Button btnName='Edit' className='bg-blue-500' />
                                        <Button btnName='Delete' className='bg-red-500' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Paginate />
                </div>

            </div>
            {modal &&
                <Modal setModal={setModal} />
            }

        </>



    )
}

export default DataTable