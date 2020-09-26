var express=require("express")
var app=express()

app.get("/", function(req, res){
    res.send("Hi there!")
})
app.get("/dog",function(req,res){
    res.send("Meaou")
})
app.get("/bye",function(req,res){
    res.send("bye")
})
app.get("/r/:name", function(req,res){
    var n=req.params.name
    res.send("Name is:" + n)
})

app.get("*",function(req,res){
    res.send("Error")
})
app.listen(3000, function(){
    console.log("Server has started!")
})
