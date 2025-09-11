import React from 'react'

function Paginate() {
    return (
        <nav aria-label="Page navigation example" className='mt-7'>
            <ul className="flex -space-x-px justify-end sm:text-sm text-xs ">
                <li>
                    <a href="#" className="flex items-center justify-center sm:px-3 px-2 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="flex items-center justify-center sm:px-3 px-2 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>

                </li>
                <li>
                    <a href="#" class="flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                </li>
            </ul>
        </nav>

    )
}

export default Paginate