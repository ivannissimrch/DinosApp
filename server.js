/* Require Express to run server and routes */
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;

/* Start up an instance of app */
const app = express();

app.use(express.static(path.join(__dirname, "DinoApp")));

/* Setup Server */
app.listen(PORT, () => {
  console.log(`Server is runing in port number ${PORT}`);
});
