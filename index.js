const express = require("express");
const path = require("path");
const app = express();
const { notFoundError, ErrorHandller } = require("./uti/errorHandller.js")


app.use(express.static("public"))

app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"));

app.get("/",(req, res, next) =>{
    const users = [
        {
            id:1,
            name:"Maryam"
        },
        {
            id:2,
            name:"Sahar"
        },
        {
            id:3,
            name:"Nasim"
        }
    ]
    res.render("index", {
        users
    });
})

app.use(notFoundError)
app.use(ErrorHandller)

app.listen(3000, () => {
    console.log("server is running http://localhost:3000");
})