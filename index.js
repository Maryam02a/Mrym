const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("main page")
    res.status(200).json({
        statusCode:200,
        message:"your server is run"
    })
});

app.use((req, res, next) => {
    return status(404).json({
        statusCode:res.statusCode,
        error:{
            type:"not found Rout",
            message:"صفحه" +req.url + "یافت نشد"
        }
    })
})

app.listen(3000, (err) => {
    if(!err) {
        console.log("your server is running on port 3000");
    }else{
        return (err)
    }
})