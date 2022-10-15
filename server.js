/* Require Express to run server and routes */
const express = require("express");
const port = 3000;

/* Start up an instance of app */
const app = express();

app.use(express.static("DinoApp"));

/* Setup Server */
app.listen(port, () => {
  console.log(`Server is runing in port number ${port}`);
});
