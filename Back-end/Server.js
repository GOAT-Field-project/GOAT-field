const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
// const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
