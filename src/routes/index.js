const orderRouter = require('./order')
const siteRouter = require('./site');
const userRouter = require('./users');
const authRouter = require('./auth');


function route(app) {
  // router
  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/order", orderRouter);
  app.use("/", siteRouter);
}

module.exports = route;