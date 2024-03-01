import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const openEye = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="eye">
        <g>
            <g>
                <path d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6 c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5 s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2 c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256 c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"></path>
            </g>
            <g>
                <path d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216 c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"></path>
            </g>
        </g>
    </svg>
);

const RegistrationForm = () => {

    const userName = JSON.parse(localStorage.getItem('users')) || []

    const [showPassword, setPassword] = useState(false);
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handlePass = () => {
        setPassword(!showPassword);
    };
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isExistingUser = userName.some(user => user.email === email)
        if (isExistingUser) {
            alert('Check');
            return;
        }

        if (password.length <= 5) {
            alert('Password atleast 5 digit');
            return;
        }

        let userData = {
            fName,
            lName,
            email,
            password
        }
        const checks = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = [...checks, userData];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        Swal.fire({
            // title: "Good job!",
            text: "Registration Succesfully",
            icon: "success"
        });
        navigate(-1)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Register Now</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>

                    <div>
                        <label htmlFor="username" className="sr-only">First Name</label>
                        <input
                            type="text"
                            autoComplete="fname"
                            required
                            className="text-black block w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder="First Name"
                            value={fName}
                            onChange={(e) => setfName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">Last Name</label>
                        <input
                            type="text"
                            autoComplete="lname"
                            required
                            className="text-black block w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder="Last Name"
                            value={lName}
                            onChange={(e) => setlName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="email"
                            autoComplete="username"
                            required
                            className="text-black block w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            autoComplete="current-password"
                            required
                            className="text-black block w-full px-4 py-3 mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 pr-12"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        {/* <button
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={handlePass}
                        >
                            {openEye}
                        </button> */}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className='text-center text-black mt-5'>Already have an account? <span onClick={() => navigate(-1)} className='text-black font-bold cursor-pointer'>Login</span></p>
            </div>
        </div>
    );
};

export default RegistrationForm;
