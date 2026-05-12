import { useState } from "react";

const DynamicFormHandling = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        const {email, password} = formData
        console.log(email, password)
    }

    const handleOnChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
            >

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login Form
                </h2>

                {/* Email */}
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password */}
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>

            </form>
            <h1>{`Email: ${formData.email}, Password: ${formData.password}`}</h1>
        </div>
    )

};

export default DynamicFormHandling;