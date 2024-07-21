import { Divider } from 'antd'
import React from 'react'

export default function About() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {}
  const {email, password, id, fullName} = loggedInUser
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-primary p-4 mx-auto" style={{ maxWidth: 400 }}>
              <h1 className='text-center mb-2'>My Profile</h1>
              <Divider />
              <div className="table-responsive">
                <table className="table">
                  <tr>
                    <td>Full Name:</td>
                    <td>{fullName}</td>
                  </tr>
                  <tr>
                    <td>Id:</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
