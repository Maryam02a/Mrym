const express = require ("express");
const pills = require("./drugstore.json");
const app = express();
const queryString = require("querystring");

app.get("/", (req, res) => {
    console.table(queryString.parse("Name=Dextros5% & Form=injection"));
    res.send(req.query);
    console.table(req.query)
})


app.get("/blog", (req, res) => {
    const { Name } = req.query;
    const regexName = new RegExp(Name ?? '' , 'gi');

    const filter = pills.filter(pill => pill.Name.match(regexName));
    res.send({pills:filter})
})

app.get("/blog1", (req, res) => {
    const { Form } = req.query;
    const regexForm =new RegExp(Form?? '' , 'gi');

    const filter = pills.filter(pill => pill.Form.match(regexForm));
    res.send({pills:filter})
})

app.listen(3000, ()=>{
    console.log("server is running > http://localhost:3000");
    
})