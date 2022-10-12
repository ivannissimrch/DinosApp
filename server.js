/* Require Express to run server and routes */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

/* Start up an instance of app */
const app = express();

/* Middleware
Here we are configuring express to use body-parser as middle-ware. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors for cross origin allowance */
app.use(cors());
/* Initialize the main project folder*/
app.use(express.static("DinoApp"));

/* Setup Server */
app.listen(port, () => {
  console.log(`Server is runing in port number ${port}`);
});
