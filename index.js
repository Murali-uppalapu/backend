const express=require("express")
const app=express()
const port=4000
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")

console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://muraliuppalapu:murali1907@cluster0.taagyje.mongodb.net/1stdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("created mongodb server")
	})
	.catch((err)=>{
		console.log(err)
	})

app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="dummydata",password="dummy password"
	const newUser=new Register({
		username:username,password:password
	})
	newUser.save()
})	
app.listen(port,()=>{
	console.log("server is in 4000 port")
})