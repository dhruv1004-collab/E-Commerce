const express = require('express')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const { type } = require('os')
const app = express()
const port = 4000

app.use(express.json());
app.use(cors());

// database to connect with MongoDb



mongoose.connect("mongodb+srv://E-commerce:12345678qwerty@e-commerce.5ll6ovz.mongodb.net/")

// API creation

app.get("/", (req, res) => {
    res.send("Express app is running")
})

// Image storage Engine

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

// Creating Upload Endpoint for image

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// schema for creating products

const Products = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    avilable: {
        type: Boolean,
        default: true,
    }

})

app.post('/addproduct', async (req, res) => {
    let products = await Products.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Products({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,

    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// creating api for removeing product

app.post("/removeproduct", async (req, res) => {
    await Products.findOneAndDelete({ id: req.body.id })
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name
    })
})

// creating API for getting all products 

app.get("/allproducts", async (req, res) => {
    let products = await Products.find({});
    console.log("all products fetched");
    res.send(products);
})


// schema for creating users model

const User = mongoose.model("User", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartdata: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// creating Endpoint for registering the user

app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email })
    if (check) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }
    let cart = {}
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartdata: cart
    })

    await user.save();
    console.log("User created");

    const data = {
        user: {
            id: user._id
        }
    }

    const token = jwt.sign(data, "secret_ecom")
    return res.json({ success: true, token })

})


// creating Endpoint for login the user

app.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user : {
                    id : user._id
                }
            }
            const token = jwt.sign(data , 'secret_ecom')
            res.json({ success: true, token })
        }
        else{
            res.json({
                success: false,
                message: "Wrong Password"
            })
        }
    }
    else{res.json({success:false , message : "User does not exist"})}
    })



// creating endpoint for newcollection data

app.get("/newcollections", async (req , res)=>{
    let products = await Products.find({})
    let newcollections = products.slice(1).slice(-8)
    console.log("new collections fetched");
    res.send(newcollections)
})

// creating endpoint for popular in women section

app.get("/popularwomen", async (req , res)=>{
    let products = await Products.find({category : "women"})
    let popularwomen = products.slice(0,4);
    console.log("Popular in women section fetched");
    res.send(popularwomen)
})

// creating middleware to fetch user

const fetchuser = async (req, res, next) => {
    const token = req.header('auth_token');
    if(!token){
        res.status(401).send({ errors: "Please authenticate using a valid token" })
    }
    else{
        try{
            const data = jwt.verify(token, "secret_ecom");
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({ errors: "Please authenticate using a valid token" })
        }
    }
}

// creating endpoint for ADDING product to cart 

app.post("/addtocart", fetchuser ,  async (req, res) => {
    console.log("Added" , req.body.itemid);
    let userdata = await User.findById(req.user.id)
    if(!userdata){
        return res.status(404).json({ error: "User not found" })
    }
    userdata.cartdata[req.body.itemid] +=1;
    await User.findOneAndUpdate({_id : req.user.id} , {cartdata : userdata.cartdata})
    res.send("Added")
})

// creating endpoint for removeing product from cart data

app.post("/removetocart", fetchuser , async (req, res) => {
    console.log("removed" , req.body.itemid);
    let userdata = await User.findById(req.user.id)
    if(!userdata){
        return res.status(404).json({ error: "User not found" })
    }

    if(userdata.cartdata[req.body.itemid] >  0){
        userdata.cartdata[req.body.itemid] -=1;
    }
    await User.findOneAndUpdate({_id : req.user.id} , {cartdata : userdata.cartdata})
    res.send("removed")

})


// creating endpoint for getting cart data

app.post("/getcartdata", fetchuser , async (req, res) => {
    let userdata = await User.findById(req.user.id)
    if(!userdata){
        return res.status(404).json({ error: "User not found" })
    }
    console.log("Cart data fetched");
    res.json(userdata.cartdata)
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Example app listening on port ${port}`)
    }
    else {
        console.log("Error : " + error)
    }
})
