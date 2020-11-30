const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const PORT = 3001;

app.use(cookieParser());

app.use(express.json())
app.use(express.static('../client/dist'));

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});