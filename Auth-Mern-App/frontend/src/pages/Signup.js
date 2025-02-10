import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `http://localhost:8080/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Signup</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-600 font-medium">
                            Name
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            autoFocus
                            placeholder="Enter your name..."
                            value={signupInfo.name}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-600 font-medium">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            value={signupInfo.email}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-600 font-medium">
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Enter your password..."
                            value={signupInfo.password}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-200"
                    >
                        Signup
                    </button>
                    <span className="block text-center text-gray-600 mt-2">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup