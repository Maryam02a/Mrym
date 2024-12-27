const express = require("express");
const path = require("path");
const { NotFoundError , ErrorHandller } = require("./util/error-handller")
const app = express();

app.use(express.static("public"))

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.post("/", (req , res , next) => {
    const users = [
        {
            id:11,
            name:"Maryam",
            age:22
        },
        {
            id:12,
            name:"Mobina",
            age:19
        },
        {
            id:13,
            name:"Morteza",
            age:20
        },
    ]
    res.render("index", {
        link:"https://google.com",
        section:"this is google",
        users
    })
})
app.use(NotFoundError)
app.use(ErrorHandller)

app.listen(3000, () => {
    console.log("server is running > http://localhost:3000");
    
})
