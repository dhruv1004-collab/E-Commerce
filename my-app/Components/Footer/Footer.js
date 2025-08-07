import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
            <img src="/Assets/logo_big.png" alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer_links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer_social_icon">
            <div className="footer_icon_container">
                <img src="/Assets/instagram_icon.png" alt="" />
            </div>
            <div className="footer_icon_container">
                <img src="/Assets/pintester_icon.png" alt="" />
            </div>
            <div className="footer_icon_container">
                <img src="/Assets/whatsapp_icon.png" alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
