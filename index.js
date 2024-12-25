const express = require("express");
const { LoginValidationSchema, reigisterValidationSchema } = require("./validation/auth.validation");
const { NotFoundError, ErrorHandler } = require("./util/ErrorHnd");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/login", async(req, res ,next) => {
    try{
        await LoginValidationShcema.validateAsync(req.body);
        res.send(req.body)
    } catch(error) {
        next(error)
    }
})

app.use("/register", async(req, res , next) => {
    try{
        await reigisterValidationSchema.validateAsync(req.body);
        res.send(req.body)
    }catch(error){
        next(error)
    }
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
    console.log("http://localhost:3000");
    
})