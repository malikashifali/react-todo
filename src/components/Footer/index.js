import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='bg-primary py-2'>
      <div className="container">
        <div className="row">
            <div className="col text-center">
                <p className="mb-0 text-white">&copy;{year} All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  )
}
