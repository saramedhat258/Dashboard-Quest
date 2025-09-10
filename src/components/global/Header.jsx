import React from 'react'
import { CgProfile } from 'react-icons/cg';

function Header() {
    return (
        <nav className="bg-gray-900 sm:h-0 h-16 w-full flex justify-end">
            <a href="#" className="sm:hidden flex items-center p-2 rounded-lg text-white group">
                <span className="self-center text-3xl font-semibold whitespace-nowrap">
                    <span className="text-4xl text-blue-500">S</span>ara
                </span>
            </a>
        </nav>
    )
}

export default Header