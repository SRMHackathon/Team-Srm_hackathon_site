import React from 'react'
import './FirstPage.css'
import hackLogo from '../media/hackLogo.png'
function FirstPage() {
  return (
    <div className='page'>
      {/* <header/>  will include once parth and aakash are done with this component*/}
      <div className="logo">
        <img src={hackLogo} alt="Hackathon logo" />
      </div>
      <div className="tagline">
        <p>BUILDING THE FUTURE BIT BY BIT...</p>
      </div>
    </div>
  )
}

export default FirstPage