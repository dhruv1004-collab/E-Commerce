"use client"
import React, { useContext } from 'react';
import "./ProductDisplay.css";
import { ShopContext } from '@/Context/ShopContext';

const ProductDisplay = (props) => {
    const { Product } = props;
    const {addtocart} = useContext(ShopContext)
    return (
        <>
            <div className="product_display">
                <div className="product_display_left">
                    <div className="product_display_img_list">
                        <img src={Product?.image} alt="" />
                        <img src={Product?.image} alt="" />
                        <img src={Product?.image} alt="" />
                        <img src={Product?.image} alt="" />

                    </div>
                    <div className="product_display_img">
                        <img className='product_display_main_img' src={Product?.image} alt="" />
                    </div>
                </div>
                <div className="product_display_right">
                    <h1>{Product?.name}</h1>
                    <div className="product_display_right_star">
                        <img src="/Assets/star_icon.png" alt="" />
                        <img src="/Assets/star_icon.png" alt="" />
                        <img src="/Assets/star_icon.png" alt="" />
                        <img src="/Assets/star_icon.png" alt="" />
                        <img src="/Assets/star_dull_icon.png" alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="product_display_right_prices">
                        <div className="product_display_right_price_old">${Product?.old_price}</div>
                        <div className="product_display_right_price_new">${Product?.new_price}</div>
                    </div>
                    <div className="product_display_right_description">
                        This premium t-shirt offers a perfect blend of comfort and style, made from soft, breathable cotton. Ideal for everyday wear, it features a modern fit with durable stitching.Available in multiple colors, it's a versatile choice for both casual outings and laid-back days.
                    </div>
                    <div className='outer_product_display_right_size flex  gap-10 my-[16px]'>
                        <div className="product_display_right_size">
                            <h1>Select Size</h1>
                            <div className="product_display_right_sizes">
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XXL</div>
                            </div>
                        </div>
                        <div className="product_display_right_size">
                            <h1>Category & Tags</h1>
                            <div className='product_display_right_inner_category'>

                            <p className="product_display_right_category"><span>Category: </span>Women , T-Shirt , Crop Top</p>
                            <p className="product_display_right_category"><span>Tags: </span>Modern , Latest</p>
                            </div>

                        </div>
                    </div>
                    <button onClick={()=>(addtocart(Product.id))}>ADD TO CART</button>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay
