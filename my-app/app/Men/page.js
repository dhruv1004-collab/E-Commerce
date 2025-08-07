"use client"
import React, { useContext } from "react";
import "@/app/ShopCategory.css"
import { ShopContext } from '@/Context/ShopContext'
import Item from "@/Components/Item/Item";

const page = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shopcategory_banner" src="./Assets/banner_mens.png" alt="" />
      <div className="shop_category_indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="sortcategory_sort">
          sort by <img src="./Assets/dropdown_icon.png" alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.filter((item) => item.category === "men").map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  )
}

export default page
