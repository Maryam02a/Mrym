const { default:mongoose } = require("mongoose");
const DB_URL = "mongodb://localhost:27017/mongoose";


mongoose.set("strictQuery", true);
mongoose.connect(DB_URL).then(() => {
    console.log("connected to the data base");
}).catch ((err) => {
    console.log(err);
    
})