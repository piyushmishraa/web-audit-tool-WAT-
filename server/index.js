const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
//setting middleware
//.use() is used when we want to use any middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

//telling server

app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/audit", (req, res) => {
  const { url } = req.body;
  console.log(`recieved url: ${url}`);
  res.json({ message: `server has recieved url ${url}` });
});
app.listen(PORT, () => {
  console.log(`server  is running on ${PORT}`);
});
