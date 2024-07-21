import React, { useRef, useState } from 'react'

export default function UpdatePassword() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const [message, setMessage] = useState("")

    const users = JSON.parse(localStorage.getItem("users")) || []
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    const handleUpdatePassword = e => {
        e.preventDefault()
        
        inputRef.current.className = "form-control mb-2"
        inputRef2.current.className = "form-control mb-2"
        inputRef3.current.className = "form-control mb-2"

        if (inputRef.current.value === loggedInUser.password) {
            if (inputRef2.current.value === inputRef3.current.value) {
                const updatedPassword = inputRef2.current.value
                const updatedLoggedInUser = { ...loggedInUser, password: updatedPassword }
                localStorage.setItem("loggedInUser", JSON.stringify(updatedLoggedInUser))
                
                const updatedUsers = users.map(user =>
                    user.email === loggedInUser.email ? updatedLoggedInUser : user
                )
                localStorage.setItem("users", JSON.stringify(updatedUsers))
                
                setMessage("Password updated successfully!")
            } else {
                setMessage("New passwords do not match.")
                inputRef2.current.className = "form-control border-danger mb-2"
                inputRef3.current.className = "form-control border-danger mb-2"
            }
        } else {
            setMessage("Current password is incorrect.")
            inputRef.current.className = "form-control border-danger mb-2"
        }

        inputRef.current.value = ""
        inputRef2.current.value = ""
        inputRef3.current.value = ""
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-4 mx-auto" style={{ maxWidth: 400 }}>
                            <h2 className='mb-4 text-center text-primary '>Update Password</h2>
                            <form onSubmit={handleUpdatePassword}>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="password" ref={inputRef} placeholder='Current Password' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" ref={inputRef2} placeholder='New Password' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" ref={inputRef3} placeholder='Confirm Password' className='form-control mb-2' />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-danger w-100 mt-2">Update</button>
                                    </div>
                                </div>
                            </form>
                            {message && <p className='mt-3 text-center'>{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}














