import { useState } from 'react';
import Button from '../components/Reusable/Button'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Success from '../components/notification/Success';
function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "", name: "" });
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate()
    const { login } = useAuth()

    /* email validate and regex  */
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return "This Field Is Required.";
        }
        if (!emailRegex.test(value)) {
            return "Please enter a valid email address.";
        }
        return "";
    };

    /* password validate and regex  */
    const validatePassword = (value) => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?-_&#])[A-Za-z\d@$!%*-_#?&]{8,}$/;
        if (!password) {
            return "This Field Is Required.";
        }
        if (!passwordRegex.test(value)) {
            return "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const nameError = !name && 'This Field Is Required.'
        setErrors({ email: emailError, password: passwordError, name: nameError });

        if (!emailError && !passwordError && !nameError) {
            login({ name, email, password })
            setSuccess(true)
            setTimeout(() => {
                navigate("/dashboard");
            }, 1500);
        }
    };
    return (
        <div className='py-28 bg-gray-100 h-screen'>
            <p className='text-3xl text-center font-semibold mb-5'>Login to access your <span className='text-blue-500'>User Dashboard</span> </p>
            <div className="p-5 sm:py-16 bg-white relative overflow-x-auto shadow-md shadow-blue-100 rounded-lg lg:w-1/2 sm:w-3/4 w-11/12 m-auto">
                <p className='text-center text-2xl font-semibold'>Login</p>
                <form className='sm:w-3/4 m-auto' onSubmit={handleSubmit}>
                    <div className="my-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="w-full rounded-lg p-3 mt-2 focus:outline-blue-500 focus:outline-1 border border-gray-300" />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="my-3">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="w-full rounded-lg p-3 mt-2  border border-gray-300 focus:outline-blue-500 focus:outline-1" />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="my-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='**********' className="w-full rounded-lg p-3 mt-2  border border-gray-300 focus:outline-blue-500 focus:outline-1" />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <Button btnName='Login' className='bg-blue-500 w-full focus:outline-0 my-5' />
                </form>
            </div>
            {success && <Success msg='Logged in successfully'/>}
        </div>
    )
}

export default Login