import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>Subscrine To Our NewsLetter and stay Updated</p>
        <div>
          <input suppressHydrationWarning type="email" placeholder='Your Email id' />
          <button suppressHydrationWarning >Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
