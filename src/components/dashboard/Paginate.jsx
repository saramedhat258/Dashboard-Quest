
import { useUsers } from '../../context/UsersContext';

function Paginate() {
    const { page, setPage } = useUsers();
    return (
        <nav aria-label="Page navigation example" className='mt-7'>
            <ul className="flex -space-x-px justify-end sm:text-sm text-xs ">
                {[1, 2, 3, 4, 5].map(p =>
                    <li key={p}>
                        <button onClick={() => setPage(p)} className={`rounded-s-lg flex items-center justify-center sm:px-3 px-2 h-8 leading-tight text-gray-500  border border-gray-300  hover:text-gray-700 ${page === p ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'} `}>{p}</button>
                    </li>
                )}
            </ul>
        </nav>

    )
}

export default Paginate