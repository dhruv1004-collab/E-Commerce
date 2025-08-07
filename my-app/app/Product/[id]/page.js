"use client"
import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from '@/Context/ShopContext'
import Item from "@/Components/Item/Item";
import { useParams } from "next/navigation";
import BreadCrum from "@/Components/BreadCrum/BreadCrum";
import ProductDisplay from "@/Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "@/Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "@/Components/RelatedProduct/RelatedProduct";

const page = () => {
  const params = useParams();
  const ProductId = params.id;
  const { all_product } = useContext(ShopContext);
  const Product = all_product.find((item) => item.id === parseInt(ProductId))



  return (
    <div>
      <BreadCrum Product={Product} />
      <ProductDisplay Product={Product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default page
