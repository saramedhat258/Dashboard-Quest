
import Button from '../components/Reusable/Button'
function Login() {
    return (
        <div className='py-28 bg-gray-100 h-screen'>
            <p className='text-3xl text-center font-semibold mb-5'>Login to accsees your <span className='text-blue-500'>User Dashboard</span> </p>
            <div className="p-5 sm:py-16 bg-white relative overflow-x-auto shadow-md shadow-blue-100 rounded-lg lg:w-1/2 sm:w-3/4 w-11/12 m-auto">
                <p className='text-center text-2xl font-semibold'>Login</p>
                <form className='sm:w-3/4 m-auto'>
                    <div className="my-3">
                        <input type="text" placeholder='Name' className="w-full rounded-lg p-3 mt-2 focus:outline-blue-500 focus:outline-1 border border-gray-300" />
                        {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                    </div>
                    <div className="my-3">
                        <input type="Email" placeholder='Email' className="w-full rounded-lg p-3 mt-2  border border-gray-300 focus:outline-blue-500 focus:outline-1" />
                        {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                    </div>
                    <div className="my-3">
                        <input type="Password" placeholder='**********' className="w-full rounded-lg p-3 mt-2  border border-gray-300 focus:outline-blue-500 focus:outline-1" />
                        {/* {err && <p className="mt-1 text-sm text-red-500">{err}</p>} */}
                    </div>
                    <Button btnName='Login' className='bg-blue-500 w-full focus:outline-0 my-5' />
                </form>
            </div>
        </div>
    )
}

export default Login