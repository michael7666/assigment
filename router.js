const order = require("./order");

const router = require("express").Router();
const url = 'https://dev.amidstyle.com';
router.get(url, async(req, res)=>{
    try {
        const orders = await order.find();
        res.status(200).json({
        success: true,
        message: "",
        data: orders
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Fail to add to cart",err,
            data: null
        })
    }
    
})