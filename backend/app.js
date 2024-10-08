const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
require("dotenv").config();
app.use(cors());

//database
const dbConnection = require("./DataBase/dbConfig");

//user routes middleware
const userRoutes = require("./routes/UserRoute");

//json middleware
app.use(express.json());

//user route middleware
app.use("/api/users", userRoutes);

//
async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    console.log(result);
    console.log("database connection");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
//listening to the server
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
