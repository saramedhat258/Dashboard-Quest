import React from 'react'
import { useUsers } from '../../context/UsersContext';

function Search() {
    const { setSearchTerm, setPage } = useUsers();
    /*Note: search not working with local data added, work only with api data */
    const handleChange = (e) => {
        setPage(1); 
        setSearchTerm(e.target.value);
    };
    return (
        <form className="max-w-md ">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative my-5">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" onChange={handleChange}
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:outline-blue-500 " placeholder="Search by Name, Email..." />
            </div>
        </form>
    )
}

export default Search