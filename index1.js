const express = require("express");
const app = express();

const users = [
    {id:1 , name:"Maryam" , family:"Badrlo"},
    {id:2 , name:"Mobina" , family:"Badrlo"},
    {id:3 , name:"Maede" , family:"abdi"},
    {id:4 , name:"Sahar" , family:"Mohamadi"},
]
const cars =[
    {id:11 , name:"Hionda Volester",color:"Yellow"},
    {id:12 , name:"Hionda Kopeh",color:"Red"},
    {id:13 , name:" Peju 206",color:"White"},
    {id:11 , name:" Tara",color:"Brown"},
]

app.get("/", (req, res) => {
    console.log("welcome to our web");
    res.send("<h1>please choose your favorite car</h1>")
    
    res.status(200).send({message:"This is Home page of Cars"})
})

app.get("/users",(req, res) =>{
    res.status(201).json({
        statusCode:201,
        data: {
            users
        }
    })
})

app.get("/cars",(req, res) =>{
    res.status(202).json({
        statusCode:202,
        data:{
            cars
        }
    })
})




app.get("/users/:id",(req, res) => {
    const id =req.params.id;
    const user = users.find(user => user.id== id)
    if (!user){
        res.status(404).json({
            statusCode:res.statusCode,
            error:{
                message:"کاربری یافت نشد"
            }
        })
    }else{
        res.status(200).json({
            statusCode:res.statusCode;
            data:{
                user
            }
        })
    }
})



app.get("/cars/:name",(req, res) => {
    const name= req.params.name;
    const car = cars.find(car=> cars.name == name)
    if (!car){
        res.status(400).json({
            statusCode:400,
            error:{
                message:"ماشینی یافت نشد"
            }
        })
    }else{
        res.status(201).json({
            statusCode:201,
            data:{
                car
            }
        })
    }
})




app.listen(3000, () => {
    console.log("server is running > http://localhost:3000");
    
})