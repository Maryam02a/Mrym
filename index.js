const express = require("express");
const path = require("path");
const { NotFoundError, ErrorHandller } = require("./util/error-handller");
const app = express();

app.use(express.static("public"))

app.set("view engin", "pug");
app.set("views",path.join(__dirname, "views"))

app.get("/", (req, res , next) => {
    res.render("index")
})

app.use(NotFoundError)
app.use(ErrorHandller)
app.listen(3000, () => {
    console.log("server is running on port 3000 http://localhost:3000");
    
})