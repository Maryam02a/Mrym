const express = require("express");
const app = express();

const customers = [
    {id:1, name:"Maryam", age:"22", monthOfBirth:"Mehr"},
    {id:2, name:"Mobina", age:"19" , monthOfBirth:"Khordad"},
    {id:3, name:"Morteza", age:"20" , monthOfBirth:"Dey"},
    {id:4, name:"Mohamad", age:"14" , monthOfBirth:"Dey"},
]
const cars = [
    {id:1, name:"Volester", color:"Yellow"},
    {id:2, name:"Hionda Kope", color:"Red"},
    {id:3, name:"Tigo-7pro", color:"Brown"},
    {id:4, name:"peju-206", color:"Purple"},
]
app.get("/",(req, res) => {
    console.log("welcome to our web ,this page is Home");
    res.send("<h3> please choose your favorite car </h3>");
})
app.get("/customers",(req, res) => {
    res.json({
        customers
    })
})

app.get("/cars",(req , res) => {
    res.json({
        cars
    })
})

app.get("/customer/:monthOfBirth", (req , res) => {
    const monthOfBirths=req.params.monthOfBirth;
    const customer=customers.find(customer => customer.monthOfBirth == monthOfBirths)
    if(!customer) {
        res.status(404).json({
            statusCode:res.status,
            Error:{
                message:"not found any customer"
            }
        })
    } else{
        res.status(200).json({
           customer
        })
    }
})

app.get("/car/:name", (req , res) => {
    const names = req.params.name;
    const car = cars.find(car => car.name == names);
    if(!car){
        res.status(403).json({
            statusCode:res.status,
            Error:{
                message:"not found any car"
            }
        })
    }else{
        res.status(201).json({
            car
        })
    }
})

app.get("/customer/:age",(req, res) => {
    const ages = req.params.age;
    const customer = customers.find(customer => customer.age == ages);
    if(!customer){
        res.status(403).json({
            statusCode:res.status,
            Error:{
                message:"sorry,we cant find any customer, please check again"
            }
        })
    }else{
        res.status(200).json({
            customer
        })
    }
})
app.listen(3000 ,() => {
    console.log("your server is running on port 3000");
    
})
