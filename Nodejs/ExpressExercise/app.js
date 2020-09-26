var express=require("express")
var app=express()

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/speak/:animal", function(req,res){
    var animalName=req.params.animal
    var animalDict={"pig": "Oink", "cow": "Moo", "dog": "Woof Woof"}
    res.send("The "+ animalName+ " says " + animalDict[animalName])
})

app.get("/repeat/:word/:times", function(req, res){
    var word_v=req.params.word
    var times_v=req.params.times
    var result=""
    for (var i=0; i<times_v; i++)
    {
        result=result+word_v+" "
    }
    res.send(result)
})

app.get("*",function(req,res){
    res.send("Sorry, page not found")
})
app.listen(3000, function(){
    console.log("Server has started!")
})