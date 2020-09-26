// the same with $("div").css("background", "purple")
$("div").first().css({"background": "purple"})

$("div.highlight").css({"width":"200px"})
$("#third").css({"border":"1px solid orange"})
$("div:first-of-type").css({"color":"pink"})

$("h1").text("New Text")
//events
$("input").keypress(function(e){
    if(e.which===13){
        alert("you press enter")
    }
})

//just hidden, not gone
// $(this).remove() if want to remove
$("button").on("click",function(){
    $(".fadeOut").fadeOut(1000, function(){
        //run after fadeOut
        console.log("completed!")
    })
})
// run at the same time with fadeout
console.log("runing at same time")
