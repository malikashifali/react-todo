import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'


export default function Login() {
    

    const navigate = useNavigate()

    const initialState = { email: "", password: "" }
    const [user, setUser] = useState(initialState)
    const { email, password } = user


    const handleChange = (e) => {
        setUser((s) => ({ ...s, [e.target.name]: e.target.value }))
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users")) || []
        const findUser = users.find( item => item.email === email && item.password === password)

        if (findUser) {
            localStorage.setItem("loggedInUser", JSON.stringify(findUser))
            navigate('dashboard/')
        } else {
            toast.error("invalid user information")
        }
        setUser(initialState)
    }
    return (
        <main className='login-form'>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="card text-center p-4 border-0" style={{ maxWidth: 400 }}>
                            <h2 className='mb-4 text-primary'>Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="email" name='email' value={email} onChange={handleChange} required placeholder='Enter Email' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name='password' value={password} onChange={handleChange} required placeholder='Enter Password' className='form-control mb-2' />
                                        <p className="mb-0 text-start"><Link to='/auth/forgot-password'>Forgot password?</Link></p>
                                    </div>
                                    <div className="col-12">
                                        <button className='btn btn-primary w-100 mt-2 fw-bold'>Login</button>
                                        <p className="mb-0 mt-2">Don't Have An Account? <Link to='auth/register'>Register</Link> Here.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
