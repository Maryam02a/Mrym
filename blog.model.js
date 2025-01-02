const { Schema, model, default: mongoose } = require("mongoose");
const BlogSchema = new Schema({
    title: {type:String, required:true , trim:true , minLength:4},
    text: {type:String, required:true, trim:true, minLength:5},
    show: {type:Boolean , default:false},
    like: {type:String, default:0},
    bookmark: {type:[String] , required :[]}
},{
    timeseries:true
})
const BlogModel = mongoose.model("blog",BlogSchema);
module.exports = {
    BlogModel
}