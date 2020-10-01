var express=require("express")
var app=express()
var bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
//use css folder
app.use(express.static("public"))

var friends=["Tom"]

app.get("/", function(req,res){
    res.render("home.ejs")
})

app.get("/fallinlovewith/:thing", function(req,res){
    var thing=req.params.thing
    res.render("love.ejs", {thingVar: thing})
})

app.get("/posts", function(req,res){
    var postsContent=[
        {title: "1111", author:"mary"},
        {title:"2222", author:"Tom"},
        {title:"3333", author:"David"},
    ]
    res.render("posts.ejs",{postsEjs:postsContent})
})
app.get("/friends", function(req,res){
    res.render("friends.ejs",{friends:friends})
    // res.render("friends.ejs")
})

app.post("/addfriend", function(req,res){
    var newFriend=req.body.newfriend
    friends.push(newFriend)
    res.redirect("/friends")
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