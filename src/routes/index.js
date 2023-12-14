
const siteRouter = require('./site');

function route(app) {
  // router

  app.use("/", siteRouter);
}

module.exports = route;