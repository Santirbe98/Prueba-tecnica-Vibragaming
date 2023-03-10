require("dotenv").config();
const app = require("./src/app.js");
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});

module.exports = server;
