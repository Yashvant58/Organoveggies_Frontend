import React from 'react'
import { Link } from 'react-router-dom'
function Errorpage() {
  return (
    <div id="notfound">
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>

            </div>
            <h2>we are sorry,page not found</h2>
            <p className='mb-5'>
                The page are looking for might have been removed had its name changed or is temporarily unavaible.
            </p>
            <Link className="nav-link"to="/">Back To Homepage</Link>
        </div>

    </div>
  )
}

export default Errorpage