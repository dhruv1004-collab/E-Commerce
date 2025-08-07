import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>new</p>
            <img src="/Assets/hand_icon.png" alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero_latest_button">
          <div>Latest Collection</div>
          <img src="/Assets/arrow.png" alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src="/Assets/hero_image.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
