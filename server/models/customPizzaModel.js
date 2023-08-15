const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    size: {type: String, require},
    toppings: [],
}, {
    timestamps:true,
});

const pizzaModel = mongoose.model('custom pizzas', pizzaSchema);

module.exports = pizzaModel;