const Order = require("../models/oders")

class OrderControllers {
    // get /order
    order(req, res, next) {
        Order.find({})
        .then(oders => res.json(oders))
        .catch(next)
    }

    create(req, res, next) {
        res.render('create');
    }

    store(req, res, next) {
        // const order = new Order(req.body);
        // order
        //     .save()
        //     .then(() => res.send('save'))
        //     .catch((error) => {});
        res.json(req.body)
    }

}

module.exports = new OrderControllers;