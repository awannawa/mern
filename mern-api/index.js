const express = require("express");

const server = express();
const port = 4000;

server.use(express());

server.listen(port, () => {
  console.log("Server berhasil running pada port : " + port);
  console.log("Server berhasil");
});
