var express=require("express"),
    mongoose=require("mongoose"),
    passport = require("passport"),
    bodyParser=require("body-parser"),
    LocalStrategy=require("passport-local"),
    passportLocalMongoose=require("passport-local-mongoose")
    User=require("./models/user")

mongoose.connect("mongodb://localhost/authApp", {useNewUrlParser: true, useUnifiedTopology: true})

var app=express();
app.use(bodyParser.urlencoded({extended: true}))

app.use(require("express-session")({
    secret:"This is secret",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
// user model use serializeUser 
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//=======================
//Routes
//=======================
app.get("/",function(req,res){
    res.render("home.ejs")
})

app.get("/secret", isLoggedIn, function(req,res){
    res.render("secret.ejs")
})
// Auth Routes

//show sign up form
app.get("/register", function(req,res){
    res.render("register.ejs")
})

app.post("/register", function(req,res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
            return res.render("register.ejs")
        }
        passport.authenticate("local")(req,res, function(){
            res.redirect("/secret")
        })
    })
})

app.get("/login", function(req,res){
    res.render("login.ejs")
})

//middleware
app.post("/login", passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res){
})

// after logout, the data in database is not deleted. the password information in session are deleted
app.get("/logout", function(req,res){
    req.logout()
    res.redirect("/")
})

//Create a middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

app.listen("3000", function(){
    console.log("server started...")
})

