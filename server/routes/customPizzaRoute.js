const express = require("express");
const router = express.Router();
const Pizza = require("../models/customPizzaModel");

router.post("/savecustompizza", async (req, res) => {
    const {pizza} = req.body;
    try {
        const newPizza = new Pizza({
            size: pizza.size,
            toppings: pizza.toppings,
        })
        await newPizza.save();
        console.log("custom pizza saved")
    } catch (error) {
        return res.status(400).json({ message: "" + error });
    }
})
module.exports = router;