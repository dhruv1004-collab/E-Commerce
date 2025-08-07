"use client"
import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '@/Context/ShopContext'

const CartItem = () => {
    const { all_product, cartItems, removetocart , getTotalCartAmount } = useContext(ShopContext)
    return (
        <>
            <div className="cartitem">
                <div className="cartitems_format_main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id}>
                                <div className="cartitems_format cartitems_format_main">
                                    <img src={item.image} alt="" className='carticon_product_icon' />
                                    <p>{item.name}</p>
                                    <p>${item.new_price}</p>
                                    <button className="cartitems_quantity">{cartItems[item.id]}</button>
                                    <p>${item.new_price*cartItems[item.id]}</p>
                                    <img className='carticon_remove_icon' onClick={() => { removetocart(item.id) }} src="/Assets/cart_cross_icon.png" alt="" />
                                </div>
                            <hr />
                            </div>
                        )
                    }
                    return null;
                })}
                <div className="cartitems_down">
                    <div className="cartitem_total">
                        <h1>Cart total</h1>
                        <div>
                            <div className="cartitems_total_item">
                                <p className="subtotal">
                                    Subtotal
                                </p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitems_total_item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems_total_item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            
                        </div>
                        <button suppressHydrationWarning>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitem_promocode">
                        <p>If you have a promo code, Enter it hear</p>
                        <div className="cartitems_promobox">
                            <input suppressHydrationWarning type="text" placeholder='promo code'/>
                            <button suppressHydrationWarning>Sumbit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
