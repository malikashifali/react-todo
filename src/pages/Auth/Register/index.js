import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

export default function Register() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const navigate = useNavigate();

    const initialState = { id: "", fullName: "", email: "", password: "" };
    const [user, setUser] = useState(initialState);

    const handleChange = (e) => {
        setUser(s => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (user.fullName && user.email && user.password) {
            const findUser = users.find((person) => person.email === user.email);
            if (findUser) {
                toast.error("User already registered with this email");
                return;
            }
            const newUser = { ...user, id: Math.random().toString(36).slice(2) };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            setUser(initialState);
            navigate('/');
        }
    };

    const { fullName, email, password } = user;

    return (
        <main className='login-form'>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="card text-center p-4 border-0" style={{ maxWidth: 400 }}>
                            <h2 className='mb-4 text-primary'>Register</h2>
                            <form onSubmit={handleRegister}>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="text" name='fullName' value={fullName} required placeholder='Enter Full Name' className='form-control mb-2' onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name='email' value={email} required placeholder='Enter Email' className='form-control mb-2' onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name='password' value={password} required placeholder='Enter Password' className='form-control mb-2' onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className='btn btn-primary w-100 mt-2 fw-bold'>Register</button>
                                        <p className="mb-0 mt-2">Already Have An Account? <Link to='/'>Login</Link> Here.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
