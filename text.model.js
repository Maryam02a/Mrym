const { Schema, Model , default:mongoose } = require("mongoose");
const TextSchema = new Schema({
    title: {type:String, required:true, trim:true , minLength:3},
    text: {type:String , required:true, trim:true , minLength:5},
    show:{type:Boolean , default:false},
    like:{type:Number, default:0},
    bookmark:{type:[String], required:[]}
},{
    timeseries:true
})

const Textmodel= mongoose.model("text", TextSchema);
module.exports = {
    Textmodel
}