const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ProjectWP")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

const collection = new mongoose.model("logincollections",LogInSchema)

module.exports=collection