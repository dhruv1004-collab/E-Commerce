"use client"
import React, { useContext , useRef , useEffect } from 'react'
import { useState } from 'react';
import "./Navbar.css";
import Link from 'next/link';
import { ShopContext } from '@/Context/ShopContext';
const Navbar = () => {
    const {getTotalCartItem} = useContext(ShopContext)
    const [authToken, setauthToken] = useState(null)

    const [menu, setmenu] = useState("SHOP")
     const menuRef = useRef()

     useEffect(() => {
       setauthToken(localStorage.getItem("auth_token"))
    
     }, [])

     const handleLogout = () => {
        localStorage.removeItem("auth_token")
        window.location.replace("/")
     }
     

     const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav_menu_visible')
        e.target.classList.toggle("open")
     }

    return (
        <>
            <div className="navbar">
                <div className="nav_logo">
                    <img src="/Assets/logo.png" alt="" />
                    <p>SHOPPER</p>
                </div>
                <img className='nav_dropdown' onClick={dropdown_toggle} src="/Assets/nav_dropdown.png" alt="" />
                <ul ref={menuRef} className="nav_menu">
                    <li onClick={()=>{setmenu("SHOP")}}><Link href="/">SHOP</Link> {menu==="SHOP" ? <hr /> : <></>} </li>
                    <li onClick={()=>{setmenu("MEN")}}><Link href="/Men">MEN</Link> {menu==="MEN" ? <hr /> : <></>}</li>
                    <li onClick={()=>{setmenu("WOMEN")}}><Link href="/Women">WOMEN</Link> {menu==="WOMEN" ? <hr /> : <></>}</li>
                    <li onClick={()=>{setmenu("KIDS")}}><Link href="/Kids">KIDS</Link> {menu==="KIDS" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                     {authToken ? <button onClick={handleLogout} suppressHydrationWarning>Logout</button> : <button suppressHydrationWarning><Link href="/Login_Signup">Login</Link></button>}
                    
                    <Link href="/Cart">   <img src="/Assets/cart_icon.png" alt="" />   </Link>
                    <div className="nav_cart_count">
                        {getTotalCartItem()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
