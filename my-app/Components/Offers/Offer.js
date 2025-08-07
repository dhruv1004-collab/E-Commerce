import React from 'react'
import "./Offer.css"

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button suppressHydrationWarning>Check Now</button>
        </div>
        <div className="offer_right">
            <img src="/Assets/exclusive_image.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Offer
