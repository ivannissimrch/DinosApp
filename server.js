/* Require Express to run server and routes */
const express = require("express");
// const port = process.env.PORT;

/* Start up an instance of app */
const app = express();

app.use(express.static("DinoApp"));

/* Setup Server */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is runing in port number 3000`);
});
