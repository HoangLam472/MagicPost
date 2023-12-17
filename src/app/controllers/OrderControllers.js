const Order = require("../models/oders")
const Users = require("../models/users")
class OrderControllers {
    // get /home
    index(req, res, next) {
        // Order.find({})
        // .then(oders => res.json(oders))
        // .catch(next)
        Users.find({})
        .then(users => res.json(users))
        .catch(next)
    }
    

}

module.exports = new OrderControllers;