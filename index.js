const express = require("express");
const { ErrHandller, NotFoundErr } = require("./util/ErrorHandller");
const { BlogModel } = require("./model/blog.model");
const { isValidObjectId } = require("mongoose");
const omitEmpty = require("omit-empty");
const app = express();
require("./config/mongo.config");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/",(req, res , next) => {
    res.send("main page")
})


app.post("/create", async(req, res , next) => {
    try{
        const{ title, text } = req.body;
        const newBlog = new BlogModel({
            title,
            text
        })
        await newBlog.save()
        res.send(newBlog)
    } catch (error){
        next(error)
    }
})


app.get("/insert-many", async(req, res , next) => {
    try{
        const  newBlog = await BlogModel.insertMany([
            {
                title:"My God",
                text:"if you break heart someone God answer the bad work of them"
            },
            {
                title:"cring",
                text:"crying"
            }
        ])
        res.send(newBlog)
    }catch(error) {
        next(error)
    }
})

app.get("/find", async(req, res , next) => {
    try {
        const newBlog = await BlogModel.find();
        res.send({
            statusCode:200,
            document:newBlog.length,
            newBlog
        })
    } catch (error) {
        next(error)
    }
})


app.get("/finds/:id", async(req , res , next) => {
    try {
        const { id } = req.params;
        if(!isValidObjectId(id)) throw { statusCode:400, message:"Id is not invalid"}
        const newBlog = await BlogModel.findOne({ _id:id });
        res.send(newBlog)
    } catch (error) {
        next(error)
    }
})

app.delete("/blogs/:id", async(req, res , next) => {
    try {
        const { id } = req.params;
        if(!isValidObjectId(id)) throw {statusCode:400 , message:"Id is not valid"}
        const result = await BlogModel.deleteOne({_id:id});
        res.send(result)
    } catch (error) {
        next(error)
    }
})

app.delete("/blogs", async(req, res ,next) => {
    try {
        const result = await BlogModel.deleteMany({});
        res.send(result)
    } catch (error) {
        next(error)
    }
})

app.put("/blogs/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const newBlogObject= omitEmpty(req.body);
        const blog = await BlogModel.findOne({_id:id});
        if(!blog) throw {statusCode:400, message:"not found blog"}
        Object.assign(blog,newBlogObject)
        await blog.save();
        res.send(blog)
    } catch (error) {
        next(error)
    }
})
app.use(ErrHandller);
app.use(NotFoundErr);
app.listen(5000 , () => {
    console.log("http://localhost:5000");
    
})