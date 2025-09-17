import { useAuth } from '../../context/AuthContext';

function Header() {
    const { authUser } = useAuth()
    const firstName = authUser.name?.split(" ")[0];
    const firstLetter = firstName?.charAt(0);
    const restOfName = firstName?.slice(1);
    /* used in small screens */
    return (
        <nav className="bg-gray-900 lg:h-0 h-16 w-full flex justify-end">
            <div className="lg:hidden flex items-center p-2 rounded-lg text-white group">
                <span className="self-center text-3xl font-semibold whitespace-nowrap">
                    <span className="text-4xl text-blue-500 capitalize !font-Courier">{firstLetter}</span>{restOfName}
                </span>
            </div>
        </nav>
    )
}

export default Header