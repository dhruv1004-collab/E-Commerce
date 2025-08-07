"use client"

import { createContext, useState , useEffect} from "react";

const getdefaultcart = () => {
    let cart = {}
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}



export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_product, setall_product] = useState([])
    const [cartItems, setcartItems] = useState(getdefaultcart())

    useEffect(() => {
        fetch("http://localhost:4000/allproducts" ).then((response)=>response.json()).then((data)=>setall_product(data))

        if(localStorage.getItem("auth_token")){
            fetch("http://localhost:4000/getcartdata",{
                method : "POST",
                headers:{
                    Accept : "application/json",
                    "auth_token" : `${localStorage.getItem("auth_token")}`,
                    "Content-Type": "application/json",
                },
                body : ""

            }).then((response)=>response.json()).then((data)=>setcartItems(data))
        }
    }, [])
    

    const addtocart = (itemid) => {
        setcartItems((prev) => {
            const updated = { ...prev, [itemid]: prev[itemid] + 1 }
            // console.log(updated)
            if(localStorage.getItem("auth_token")){
                fetch("http://localhost:4000/addtocart",{
                    method: "POST",
                    headers: {
                        Accept : "application/json",
                        'auth_token' : `${localStorage.getItem("auth_token")}`,
                        "Content-Type": "application/json",                       
                    },
                    body : JSON.stringify({"itemid" : itemid})
                }).then((response)=>response.json()).then((data)=>console.log(data))
            }

            return updated

        })
    }

    

    const removetocart = (itemid) => {
        setcartItems((prev) => {
            const updated = { ...prev, [itemid]: prev[itemid] - 1 }
            // console.log(updated)
            if(localStorage.getItem("auth_token")){
                fetch("http://localhost:4000/removetocart",{
                    method: "POST",
                    headers: {
                        Accept : "application/json",
                        'auth_token' : `${localStorage.getItem("auth_token")}`,
                        "Content-Type": "application/json",                       
                    },
                    body : JSON.stringify({"itemid" : itemid})
                }).then((response)=>response.json()).then((data)=>console.log(data))
            }
            return updated

        })
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_product.find(product => product.id === parseInt(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };


    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalItem += cartItems[itemId]
            }
        }
        return totalItem
    }



    const contextValue = { all_product, cartItems, addtocart, removetocart, getTotalCartAmount, getTotalCartItem }





    return (
        <ShopContext.Provider value={contextValue}>

            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;