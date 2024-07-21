import { Button } from 'antd'
import React from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem("loggedInUser")
        navigate('/')
    }

    const hours = new Date().getHours()

    const greeting = hours < 12
        ? "Good Morning"
        : hours < 18
            ? "Good Afternoon"
            : "Good Night";

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container">
                    <Link to='/dashboard/todos' className="navbar-brand">Todos</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/dashboard/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboard/about' className="nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dashboard/Users' className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to='/dashboard/update-password' className="dropdown-item">update password</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="mb-0 fw-bold text-info me-2">{greeting} {loggedInUser && loggedInUser.fullName}</p>
                            <Button danger className='bg-danger text-light' onClick={handleLogOut}><MdOutlineLogout />LogOut</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
