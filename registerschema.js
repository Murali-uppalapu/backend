const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String
}

const Register=mongoose.model("student",newUserSchema)

module.exports=Register