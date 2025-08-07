import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <>
      <div className="descriptionbox">
        <div className="descriptionbox_navigator">
            <div className="descriptionbox_nav_box">Description</div>
            <div className="descriptionbox_nav_box fade">
                Reviews (122)
            </div>
        </div>
            <div className='description_description'>
                <p>
                    This e-commerce website is a modern, responsive platform built to deliver a smooth and engaging online shopping experience. Developed using technologies like Next.js, React, and Tailwind CSS, it features intuitive navigation, category-based filtering, and a secure checkout process. The site showcases a wide range of products including fashion, electronics, and lifestyle items. For example, our premium cotton T-shirts are crafted for comfort and style, featuring soft breathable fabric, a modern fit, and high-quality prints—ideal for daily wear across all seasons.
                </p>
                <p>The e-commerce website offers a clean and efficient shopping experience, designed with a focus on usability and performance. Built using modern web technologies, it supports category-wise browsing, responsive design, and real-time product filtering. Among the products available, the cotton T-shirts stand out for their soft texture, stylish design, and durable material—making them a perfect choice for both casual and everyday wear.</p>
            </div>
      </div>
    </>
  )
}

export default DescriptionBox
