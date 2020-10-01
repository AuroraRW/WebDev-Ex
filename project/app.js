var express=require("express")
var app=express()
var bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

var campsites=[
    {name: "Creek", image:"https://pixabay.com/get/55e4d5454b51ab14f1dc84609620367d1c3ed9e04e507749742c78dc954fc1_340.jpg"},
    {name: "Hill", image:"https://pixabay.com/get/57e8dc414e5ba814f1dc84609620367d1c3ed9e04e507749742c73d29644c5_340.jpg"},
    {name: "Mountain", image:"https://pixabay.com/get/54e5d4414356a814f1dc84609620367d1c3ed9e04e507749742c73d29644c5_340.jpg"}
]

app.get("/", function(req, res){
    res.render("landing.ejs")
})

app.get("/campsites", function(req,res){
    
    res.render("campsites.ejs", {campsites:campsites})
    
})

app.post("/post",function(req,res){
    // eval(require("locus"))
    var name=req.body.name
    var image=req.body.image
    var newCampsite={name:name, image:image}
    campsites.push(newCampsite)
    
    res.redirect("/campsites")
    // res.send("POST is OK!")
})

app.get("/campsites/new",function(req,res){
    res.render("new.ejs")
})

app.listen(3000, function(){
    console.log("Campsite App Server Started!")
})