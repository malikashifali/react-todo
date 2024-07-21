import React from 'react'

export default function Users() {
  const users = JSON.parse(localStorage.getItem("users")) || []
  return (
    <main>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1 className='text-center text-primary mb-4'>User's Table</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className='table table-bordered table-hover text-center bg-inherit'>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
                </thead>
                <tbody>
                  {users.map((user, i)=>{
                    const {fullName, email, password, id} = user
                    return(
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{id}</td>
                        <td>{fullName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
