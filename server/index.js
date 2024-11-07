const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
