const Order = require("../models/oders");

class OrderControllers {
  // get /order
  order(req, res, next) {
    Order.find({})
      .then((oders) => res.json(oders))
      .catch(next);
  }

  create(req, res, next) {
    res.render("create");
  }

  store(req, res, next) {
    // const order = new Order(req.body);
    // order
    //     .save()
    //     .then(() => res.send('save'))
    //     .catch((error) => {});
    res.json(req.body);
  }

  // cập nhật dữ liệu tracking info và pointmanagerstar ( đang bug)
  updateOrder(req, tes, next) {
    const orderId = req.params.orderId;
    const newTrackingInfoData = req.body.trackingInfo;
    const pointManagerId1 = req.body.pointManagerId1;
    const pointManagerId2 = req.body.pointManagerId2;

    // Thêm dữ liệu vào trackingInfo
    Order.updateOne(
      { "orders._id": orderId },
      { $push: { "orders.$.trackingInfo": newTrackingInfoData } }
    )
      .exec()
      .then(() => {
        // Cập nhật pointManagerStats cho point1 (sentQuantity tăng lên)
        return Order.updateOne(
          { "managedAccounts._id": pointManagerId1 },
          {
            $inc: {
              [`managedAccounts.$.pointManagerStats.${pointManagerId1}.sentQuantity`]: 1,
            },
          }
        ).exec();
      })
      .then(() => {
        // Cập nhật pointManagerStats cho point2 (receivedQuantity tăng lên)
        return Users.updateOne(
          { "managedAccounts._id": pointManagerId2 },
          {
            $inc: {
              [`managedAccounts.$.pointManagerStats.${pointManagerId2}.receivedQuantity`]: 1,
            },
          }
        ).exec();
      })
      .then(() => res.send("Data updated successfully"))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  }
}

module.exports = new OrderControllers();
