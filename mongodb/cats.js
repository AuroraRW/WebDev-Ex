var mongoose=require("mongoose")
//If there is not a database called carApp, then create one
mongoose.connect("mongodb://localhost/carApp")

//define the pattern of data
var catSchema=new mongoose.Schema({
    name:String,
    age: Number,
    temper:String
})
var Cat=mongoose.model("Cat", catSchema)

// //--------------------------
// // Cat.find(), Cat.remove()...
// var george =new Cat({
//     name: "Norris",
//     age:13,
//     temper: "Evil"
// })
// //'cat' is sent back from database
// george.save(function(err, cat){
//     if (err){
//         console.log("Wrong")
//     }else{
//         console.log("Success")
//         console.log(cat)
//     }
// })

//--------------------------
Cat.create({
    name:"White",
    age: 20,
    temper: "Bland"
},function(err, cat){
    if (err){
        console.log("Wrong")
    }else{
        console.log("Success")
        console.log(cat)
    }
})
//----------------------------
Cat.find({}, function(err, cats){
    if (err){
        console.log("Wrong")
    }else{
        console.log("Success")
        console.log(cats)
    }
})

