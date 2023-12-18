const orderRouter = require('./order')
const siteRouter = require('./site');
const userRouter = require('./users')

function route(app) {
  // router
  app.use("/users", userRouter);
  app.use("/order", orderRouter);
  app.use("/", siteRouter);
}

module.exports = route;