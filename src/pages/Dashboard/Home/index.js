import React, { useContext } from 'react'
import { HiMiniUsers } from 'react-icons/hi2'
import { TiDocumentAdd } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'

export default function Home() {
  const {isAuthenticated} = useContext(AuthContext)
  console.log(isAuthenticated)
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: 300, minHeight: 200 }}>
              <h2><Link to='/dashboard/todos' style={{textDecoration:"none"}}><TiDocumentAdd className='mb-2' />Todos</Link></h2>
            </div>
          </div>
          <div className="col-6">
            <div className="card mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: 300, minHeight: 200 }}>
              <h2><Link to='/dashboard/users' style={{textDecoration:"none"}}><HiMiniUsers className='mb-2' />Users</Link></h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
