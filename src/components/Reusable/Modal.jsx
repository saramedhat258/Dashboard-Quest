import React from 'react'
import Button from './Button'

function Modal({setModal}) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                {/* header of modal */}
                <header className="flex justify-between items-center text-lg font-bold"><p className="text-center m-auto w-1/2">Add New User</p> <p className="cursor-pointer" onClick={()=>setModal(false)}>✕</p></header>
                {/* body of modal (form) */}
                <form action="">

                        <div  className="my-3">
                            <label htmlFor='Name'>name</label>
                            <input type="text" placeholder='Name'  className="w-full rounded-lg p-3 mt-2  border border-gray-300 outline-0" />
                            {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                        </div>

                    
                    <Button btnName='update' className='bg-blue-500 w-full' />
                </form>
            </div>
        </div>
    )
}

export default Modal