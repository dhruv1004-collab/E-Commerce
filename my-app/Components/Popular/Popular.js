import React from 'react'
import  "./Popular.css"
// import data_product from '@/public/Assets/data.js'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'

const Popular = () => {

  const [data_product, setData_Product] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/popularwomen").then((response) => response.json()).then((data) => setData_Product(data))
  
  
  }, [])
  

  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular_items">
            {data_product.map((item , i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      </div>
    </>
  )
}

export default Popular
