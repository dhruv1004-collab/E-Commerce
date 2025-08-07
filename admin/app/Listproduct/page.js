"use client"
import Sidebar from '@/Components/Sidebar/Sidebar'
import React, { useState , useEffect } from 'react'
import "./Listproduct.css"

const page = () => {

  const [allproducts, setAllproducts] = useState([])

  const fetchinfo = async  ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>setAllproducts(data))
  }

  useEffect(() => {
    fetchinfo();
  
 
  }, [])

  const removeproduct = async (id)=>{
    await fetch('http://localhost:4000/removeproduct' , {
      method:"POST",
      headers : {
        Accept: "application/json",
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({id:id})
    })
    fetchinfo();
  }
  

  return (
    <div className='list_product  '>
      <Sidebar/>
      <div className="inner_list_product">
        <h1>All Products List</h1>
        <div className="listproduct_format_main">
          <p>S.No</p>
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproducts_allproducts">
          <hr />
          {allproducts.map((product , index) =>{
            return <React.Fragment key={index}>
             <div key={index} className="listproduct_format_main listproduct_format">
              <p>{product.id}</p>
              <img src={product.image} className='listproduct_product_item' alt="" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{removeproduct(product.id)}} src="/Assets/cross_icon.png" className='listproduct_remove_icon' alt="" />
            </div>
            <hr />
            </React.Fragment>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default page
