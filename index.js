const express = require ("express");
const { notFoundError,ErrorHlerr } = require("./Util/ErrHandller");
const { Textmodel } = require("./Model/text.model");
const { isValidObjectId } = require("mongoose");
const omitEmpty = require("omit-empty");
const app = express();
require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.get("/main", (req, res , next) => {
    res.send("Home page")
})

app.post("/main/create", async (req, res , next) => {
    try {
        const { title,text } = req.body;
        const newText = new Textmodel({
            title,
            text
        }) 
        await newText.save();
        res.send(newText)
    } catch (error) {
        next(error)
    }
})


app.post("/main/createmany",  async(req, res , next) =>{
    try {
        const newText = await Textmodel.insertMany([
            {
                title:"break",
                text:"break the heart of someone is the worste work of the world"
            },
            {
                title:"all of me",
                text:"always someone who is all of you who break heart you awful"
            }
        ])
        res.send(newText)
    } catch (error) {
        next(error)
    }
})

app.get("/main/find", async(req, res , next) => {
   try {
    const newText = await Textmodel.find();
    res.send({
        statusCode:200,
        document:express.text.length,
        newText
    })
   } catch (error) {
     next(error)
   }
})

app.get("/main/find/:id", async(req, res , next) => {
    try {
        const { id } = req.params;
        if(!isValidObjectId(id)) throw {statusCode:400 , message:"id is not valid"}
        const newText = await Textmodel.findOne({_id:id});
        res.send(newText)
    } catch (error) {
        next(error)
    }
})

app.delete("/main/delete/:id", async(req, res , next) => {
    try {
        const { id } = req.params;
        if(!isValidObjectId(id)) throw {statusCode:400, message:"id is not valid"}
        const result = await Textmodel.deleteOne({_id:id});
        res.send(result)
    } catch (error) {
        next(error)
    }
})

app.delete("/main/delete", async(req, res , next) => {
    try {
        const result = await Textmodel.deleteMany({});
        res.send(result)
    } catch (error) {
        next(error)
    }
})

app.put("/main/updatetext/:id" , async(req, res , next) => {
    try {
        const { id } = req.params;
        const newTextObject = omitEmpty(req.body);
        const Text = await Textmodel.findOne({_id:id});
        if(!Text) throw {statusCode:400 , message:"text not found"}
        Object.assign(Text, newTextObject),
        await Text.save();
        res.send(Text)
    } catch (error) {
        next(error)
    }
})


app.use(notFoundError)
app.use(ErrorHlerr)

app.listen(5000, () => {
    console.log("server is running on port 4000 > http://localhost:5000");
    
})