import Button from '../Reusable/Button'
import Search from './Search'
import Paginate from './Paginate'
import Modal from '../Reusable/Modal'
import Loading from '../Reusable/Loading'
import Error from '../notification/Error'
import { useUsers } from '../../context/UsersContext'
import { useState } from 'react'
import Success from '../notification/Success'
function DataTable() {

    const { users, error, modal, setModal, setEditMode, setEditData, deleteUser } = useUsers()
    const [deleted, setDeleted] = useState(false)
    const [added, setAdded] = useState(false)
    const [updated, setUpdated] = useState(false)
    const handleDelete = (id) => {
        deleteUser(id)
        setDeleted(true)
        setTimeout(() => {
            setDeleted(false)
        }, 2500);
    }
    
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
                    {users ?
                        <div className="relative overflow-x-auto ">
                            <table className="w-full border border-gray-200 border-separate rounded-lg mb-2 text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase  bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Company
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            University
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody >{
                                    users?.map((user) => (
                                        <tr key={user.id} className="bg-white border-b  border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {user?.firstName + ' ' + user?.lastName}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user?.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user?.company?.name || user?.company}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user?.university}
                                            </td>
                                            <td className="px-6 py-4 flex gap-2 justify-center">
                                                <Button btnName='Edit' className='bg-blue-500' handleClick={() => { setModal(true), setEditMode(true), setEditData(user) }} />
                                                <Button btnName='Delete' className='bg-red-500' handleClick={() => handleDelete(user.id)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        : <Loading />
                    }
                    {users?.length === 0 &&
                        <p className='text-center p-5 font-medium text-2xl text-blue-500 bg-blue-50/50 rounded-lg '>No Users Found</p>
                    }
                    <Paginate />
                </div>

            </div>
            {modal && <Modal setAdded={setAdded} setUpdated={setUpdated} />}
            {error &&
                <Error msg={error} />
            }
            {deleted &&
                <Error msg={'User Is Deleted'} />
            }
            {added &&
                <Success msg={'User Is Added Successfully'} />
            }
            {updated &&
                <Success msg={'User Is Updated Successfully'} />
            }
        </>
    )
}

export default DataTable