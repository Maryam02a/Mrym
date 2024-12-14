const express = require("express");
const app = express();
const dotEnv = require(".env");
const path = require("path");
dotEnv.config();
const NodeEnv = process.env.Node_Env;
dotEnv.config({
    path: path.join(__dirname, `.env.${NodeEnv}`)
})
require("./blogs")
app.get("/", (req, res, next) => {
    console.log(process.env.API_KEY);
    
    res.send("server run")
})
app.listen(process.env.PORT, () => {
    console.log("server is running on port" + process.env.PORT);
    
})