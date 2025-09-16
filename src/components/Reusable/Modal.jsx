import React, { useState } from 'react'
import Button from './Button'
import { useUsers } from '../../context/UsersContext'

function Modal({ setAdded, setUpdated }) {
    const { addUser, updateUser, editMode, setEditMode, editData, setEditData, setModal } = useUsers()
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState(
        editData && editMode ?
            {
                id: editData.id,
                firstName: editData.firstName,
                lastName: editData.lastName,
                email: editData?.email,
                company: editData?.company?.name || editData?.company,
                university: editData?.university
            }
            : { id: Date.now(), firstName: '', lastName: '', email: '', company: '', university: '' })

    const FormData = [
        { name: 'firstName', placeholder: 'First Name', value: form.firstName, type: 'text' },
        { name: 'lastName', placeholder: 'Last Name', value: form.lastName, type: 'text' },
        { name: 'email', placeholder: 'Email', value: form.email, type: 'email' },
        { name: 'company', placeholder: 'Company', value: form.company, type: 'text' },
        { name: 'university', placeholder: 'University', value: form.university, type: 'text' }
    ]
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        /* form validation */
        const newErrors = {}
        FormData.forEach((field) => {
            if (!form[field.name].trim()) {
                newErrors[field.name] = "This field is required"
            }
        })
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        /* edit and add handling */
        if (editMode) {
            setEditMode(false)
            updateUser(form, form.id)
            setEditData(null)
            setUpdated(true)
            setTimeout(() => {
                setUpdated(false)
            }, 2500);
        } else {
            addUser(form)
            setAdded(true)
            setTimeout(() => {
                setAdded(false)
            }, 2500);
        }
        setModal(false)
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                <header className="flex justify-between items-center text-lg font-bold"><p className="text-center m-auto w-1/2">{editMode ? 'Update Existing User' : 'Add New User'}</p> <p className="cursor-pointer" onClick={() => { setModal(false), setEditMode(false) }}>✕</p></header>
                <form onSubmit={handleSubmit}>
                    {
                        FormData.map(data => (
                            <div className="my-3" key={data.placeholder}>
                                <label htmlFor={data.placeholder}>{data.placeholder}</label>
                                <input {...data} className="w-full rounded-lg p-2 mt-2  border border-gray-300 outline-0" onChange={handleChange} />
                                {errors[data.name] && <p className="mt-1 text-sm text-red-500">{errors[data.name]}</p>}
                            </div>
                        ))
                    }
                    <Button btnName={editMode ? 'Update' : 'Add'} className='bg-blue-500 w-full' />
                </form>
            </div>
        </div>
    )
}

export default Modal