require("dotenv").config();
const server = require("./src");
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
