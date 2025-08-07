"use client"
import Sidebar from '@/Components/Sidebar/Sidebar'
import { React, useState , useRef } from 'react'
import "./Addproduct.css"


const page = () => {
  const [image, setImage] = useState(false)
  const fileInputRef = useRef(null)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  })

  const ImageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const addProduct = async () => {
    console.log(productDetails)
    let responceData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image)

    await fetch('http://localhost:4000/upload', {
      method: "POST",
      headers: {
        Accept: "appication/json"
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => responceData = data)

    if (responceData.success) {
      product.image = responceData.image_url;
      console.log(product)
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),

      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("failed")
        if (data.success) {
          setProductDetails({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: ""
          });
          setImage(null);

          fileInputRef.current.value = null;

        }
      })
    }
  }

  return (
    <div className='add_product'>
      <Sidebar />
      <div className='inner_add_product'>
        <div className="addproduct_itemfield">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} suppressHydrationWarning type="text" name='name' placeholder='Type hear' />
        </div>
        <div className="addproduct_price">
          <div className="addproduct_itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} suppressHydrationWarning type="text" name='old_price' placeholder='Type hear' />
          </div>
          <div className="addproduct_itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} suppressHydrationWarning type="text" name='new_price' placeholder='Type hear' />
          </div>
        </div>
        <div className="addproduct_itemfield">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} suppressHydrationWarning name="category" className='add-product-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct_itemfield">
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image) : `/Assets/upload_area.svg`} className='addproduct_thumnail_img' alt="" />
          </label>
          <input ref={fileInputRef} onChange={ImageHandler} suppressHydrationWarning type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={() => { addProduct() }} suppressHydrationWarning className="addproduct-btn">ADD</button>
      </div>
    </div>
  )
}

export default page
