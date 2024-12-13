const express = require("express");
const api = express();

const customers = [
    {id:1 , name:"Maryam", problem:"headache"},
    {id:2 , name:"Mobina", problem:"toothache"},
    {id:3 , name:"Morteza", problem:"backache"},
    {id:4 , name:"Mohamad", problem:"sore throat"},
]

const pills = [
    {
        "id":"1",
        "Name":"Bisoprolol",
        "useingFor":"heartach",
        "Form":"tablet",
        "Description":"in three doses:2.5,5,10",
        "price":15.5
    },
    {
        "id":"2",
        "Name":"Serum Dextros5%",
        "useingFor":"for sick and cold",
        "Description":"for injection and it has 0.5litr and 1 litr",
        "form":"injection",
        "price":30.5
    },
    {
        "id":"3",
        "Name":"Alprazolam",
        "useingFor":"soothing and sleapy",
        "Description":"in tow doses:1,0.5",
        "Form":"tablet",
        "price":18.5
    },
    {
        "id":"4",
        "Name":"Diclofenac",
        "useingFor":"backache and body pain",
        "Description":"in three doses:25,50,100",
        "Form":"tablet & supp & ampoule",
        "price":10.5
    },
    {
        "id":"5",
        "Name":"Mefnamic acid",
        "useingFor":"thoothache and pain",
        "Description0":"",
        "form":"tablet",
        "price":12.5
    },
    {
        "id":"6",
        "Name":"Dextrometorphan",
        "useingFor":"sore throat",
        "Description":"dose:15",
        "form":"syrup & tablet",
        "price":20.5
    },
    {
        "id":"7",
        "Name":"Famotidin",
        "useingFor":"stomachache",
        "Description":"in tow doses:40,20",
        "form":"syrup & ampoule & tablet",
        "price":20.5
    },
]

app.get("/",(req, res) => {
    res.statuse(200).json({
        message:"this is drugstore site"
    })
    res.send("<h2>please ask problem with us</h2>")
})

app.get("/Customers",(req, res() => {
    res.status(201).json({
        statuseCode:201,
        data:{
            customers
        }
    })
}))

app.get("/pills", (req, res) =>{
    res.status(202).json({
        statuseCode:202,
        data:{
            pills
        }
    })
})

app.get("/customers/:id",(req, res) => {
    const id =req.params.id;
    const customer =customers.find(customer=>customer.id==id);
    if(!customer){
        res.status("404").json({
            statuseCode:res.status;
            error:{
                message:"مشتری یافت نشد"
            }
        })
    }else(
        res.status(200).json({
            statuseCode:200,
            data:{
                customer
            }
        })
    )
})

app.get("/customers/:problem",(req, res) =>{
    const problem =req.params.problem;
    const customer = customers.find(customer =>customer.problem==problem);
    if(!customer){
        res.status(404).json({
            statuseCode:404,
            error:{
                message:"not found any customers"
            }
        })
    }else{
        res.status(200).json({
            statuseCode:200,
            data:{
                customer
            }
        })
    }
})

app.get("/pills/:useingFor", (req, res) => {
    const useingFor =req.params.useingFor;
    const pill = pills.find(pill => pill.useingFor == useingFor);
    if(!pill){
        res.status(400).json({
            statuseCode:res.statuseCode,
            error:{
                message:"not found any pill"
            }
        })
    }else{
        res.status(201).json({
            statuseCode:201,
            data:{
                pill
            }
        })
    }
})

app.get("/pills/:Description", (req, res) => {
    const Description = req.params.Description;
    const pill = pills.find(pill => pill.Description == Description)
    if(!pill){
        res.status(400).json({
            statuseCode:res.statuseCode,
            error:{
                message:"not found any pill"
            }
        })
    }else{
        res.status(201).json({
            statuseCode:201,
            data:{
                pill
            }
        })
    }
})



app.listen(3000, () =>{
    console.log("server is running > http://localhost:3000");
    
})
