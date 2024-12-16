const express = require("express");
const serveFavIcon = require("serve-favicon");
const path = require("path");
const app = express();

app.use(serveFavIcon(path.join(__dirname, "favicon/home_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png")))
app.get("/", (req, res, next ) => {
    res.send("Hello to Home")
})

app.listen(5000, () => {
    console.log("server is running");
    
})