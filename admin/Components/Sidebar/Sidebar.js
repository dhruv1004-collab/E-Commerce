import React from 'react'
import Link from 'next/link'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link href={'/Addproduct'} style={{textDecoration: "none"}}>
        <div className="sidebar_item">
          <img src="/Assets/Product_Cart.svg" alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link href={'/Listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar_item">
          <img src="/Assets/Product_list_icon.svg" alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
