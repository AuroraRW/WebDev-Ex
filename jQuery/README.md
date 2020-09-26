# jQuery
### set CSS style
1. $("h1"): return a list, even there is only one element
2. $("p").css({"font-size":"100px"}) or $("p").css({fontSize:"100px"})
3. $("li").css(): do not need to loop

### set text, html, attribute, value, class
1. $("h1").text("This is new text")
2. $("li").html("<a href="google.com">GOOGLE</a>)
3. $("img").attr("src","https://....")
4. $("input").val(): get the value of the input
   $("input").val("New val"): set the value of the input
5. $("p").addClass("first second")
   $("p").removeClass("first")
   $("p").toggleClass("first")
6. $("li").addClass("first"): do not need to loop
7. $("li").first().addClass("first"): set the first one
   $("li").last().addClass("first"): set the last one

### Events
1. $("button").click(function(){
    $(this).css({"balckground":"pink"})
})
2. keypress
3. $("h1").on("click",function(){
    $(this).css("color","purple")
})
4. fadeOut, fadeIn, fadeToggle, slideDown, slideUp, slideToggle