const express = require("express");
const app = express();


app.get("/:numbers", (req, res) => {
    let number1 = req.params.numbers;
    let obj = { key:"" };
    console.log(number1);
    console.log(obj);
    

    if (number1 == 2) throw { status: 400 , message:"number is not correct" },
    if (number1 == 5) throw { status:200 , message:"number is correct" }
    res.send("main page")
})

//app.use((req, res) => {
//    return res.status(404).json({
//        statuseCode:res.statusCode,
//        error: {
//            type:"not found route",
//            message:"صفحه" + req.url +"یافت نشذ"
//        }
//    })
//})

//app.get("/:numbers", (req, res, next) => {
//    try{
//        let number1 = req.params.numbers;
//        let obj = { key :"" };
//        console.log(number1);
//        console.log(obj);
//
//        if (number1 == 2) throw { status:400, message:"number is not currect"}
//
//        res.send("main page")
//    } catch (error) {
//        next (error)
//    }
//})

app.use((err, req, res , next) => {
    return res.status(500).json({
        statuseCode:res.statuseCode,
        error:{
            message:err.message || "InternalServerError"
        }
    })
})
app.listen(3000, (err) => {
    if(!err){
        console.log("your server is running on port 3000");
        
    }else{
        console.log(err);
        
    }
})