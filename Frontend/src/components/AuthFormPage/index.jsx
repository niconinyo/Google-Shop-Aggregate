import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend.js"






export default function AuthFormPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { formType } = useParams()
    const navigate = useNavigate();

async function handleSubmit(event) {
    event.preventDefault()
    
    if (formType === 'login') {
        const { token } = await logIn(formData)
        localStorage.setItem('userToken', token)
    } else {
        const { token } = await signUp(formData)
        localStorage.setItem('userToken', token)
    }
  
    navigate('/')
}


    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'
    
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="bg-cyan-900 rounded-lg shadow-xl p-10 w-full max-w-md">
                <h2 className="text-3xl text-center font-bold text-sky-100 mb-8">{actionText}</h2>
                <form className="space-y-9" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-3 text-sm font-medium text-sky-100 dark:text-sky-100" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="bg-sky-100 text-cyan-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-sky-100 dark:placeholder-cyan-900 dark:text-cyan-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-3 text-sm font-medium text-sky-100 dark:text-sky-100" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="bg-sky-100 text-cyan-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-sky-100 dark:placeholder-cyan-900 dark:text-cyan-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-sky-100 hover:bg-sky-100 hover:text-cyan-900 font-bold py-1 px-2 bg-cyan-900 rounded cursor-pointer mr-2">
                            {actionText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
