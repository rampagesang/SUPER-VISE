
// Dependencies
// =============================================================
let Sale = require('../models/sale')
let Sequelize = require("sequelize")
let db = require('../models')
// Routes
// =============================================================
module.exports = function(app) {


//GET route for getting all posts
app.get("/api/inventory"), function(req, res) {
    db.Inventory.findAll({})
    .then(function(dbInventory){
        res.json(dbInventory)
    })
};

app.post("/api/add"), function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Inventory.create({
        where: {
            make: req.body.make,
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            year: req.body.year,
            msrp: req.body.msrp_price,
            invoice: req.body.invoice_price,
            sticker: req.body.sticker_price,
            sale: req.body.sale_price
            
        }
    })
        .then(function (dbInventory) {
            res.json(dbInventory);
        })
    }
};
