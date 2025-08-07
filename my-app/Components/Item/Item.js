"use client"

import React from 'react'
import "./Item.css"
import Link from 'next/link'

const Item = ({id, image, name, new_price, old_price }) => {
  return (
    <>
      <div className="item">
        <Link href={`/Product/${id}`}><img onClick={() =>{if(typeof window !== 'undefined'){window.scrollTo(0,0)}}} src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="item_prices">
            <div className="item_price_new">
                ${new_price}
            </div>
            <div className="item_price_old">
                ${old_price}
            </div>
        </div>
      </div>
    </>
  )
}

export default Item
