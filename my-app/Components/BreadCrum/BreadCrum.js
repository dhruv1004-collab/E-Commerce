"use client"
import React from 'react'
import "./BreadCrum.css"


const BreadCrum = (props) => {
  const {Product} = props;

  return (
    <>
      <div className="Breadcrum">
        HOME <img src="/Assets/arrow.svg" alt="" />  SHOP <img src="/Assets/arrow.svg" alt="" /> {Product?.category} <img src="/Assets/arrow.svg" alt="" /> {Product?.name}
      </div>
    </>
  )
}

export default BreadCrum
