import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [message, setMessage] = useState("");

    const handleResetPassword = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const newPassword = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (!email || !newPassword || !confirmPassword) {
            setMessage("All fields are required");
            return;
        }

        const userForResetPassword = users.find((user) => user.email === email);

        if (!userForResetPassword) {
            setMessage("No user found with this email");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        userForResetPassword.password = newPassword;
        const updatedUsers = users.map(user =>
            user.email === email ? userForResetPassword : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setMessage("Password Reset Successfully");
        emailRef.current.value = ""
        passwordRef.current.value = ""
        confirmPasswordRef.current.value = ""
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-4 mx-auto border-0" style={{ maxWidth: 400 }}>
                            <h2 className='text-center mb-4 text-primary'>Reset Password</h2>
                            <form onSubmit={handleResetPassword}>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="email" name="reset-email" ref={emailRef} placeholder='Enter Email' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="reset-password" ref={passwordRef} placeholder='Enter Password' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="confirm-reset-password" ref={confirmPasswordRef} placeholder='Confirm Password' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className="btn btn-primary w-100 my-2">Submit</button>
                                        {message && <p className="mb-0">{message} <Link to='/'>Login</Link> Now.</p>}
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
