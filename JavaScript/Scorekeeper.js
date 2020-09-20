var number1=document.getElementById("number1")
var number2=document.getElementById("number2")
var player1=document.getElementById("player1")
var player2=document.getElementById("player2")
var gameOver=false
var gameNum=document.getElementById("gameNum")
var inputNum=document.querySelector("input")
inputNum.value="0"
// var gameplay=document.querySelector("h3 span")

inputNum.addEventListener("change", function(){
    gameNum.textContent=this.value
})
player1.addEventListener("click", function(){
    var temp=Number(number1.textContent)
    var gN=Number(gameNum.textContent)
    if(!gameOver){
        if(temp<gN){
            temp+=1
            number1.textContent=temp.toString()
            if(temp==gN){
                number1.style.color="green"
                gameOver=true
            }
        }
    }
})

player2.addEventListener("click", function(){
    var temp=Number(number2.textContent)
    var gN=Number(gameNum.textContent)
    if(!gameOver){
        if(temp<gN){
            temp+=1
            number2.textContent=temp.toString()
            if(temp==gN){
                number2.classList.add("winner")
                gameOver=true
            }
        }
    }
})

var reset=document.getElementById("reset")
reset.addEventListener("click", function(){
    number1.textContent="0"
    number2.textContent="0"
    number1.style.color="black"
    number2.classList.remove("winner")
    gameOver=false
})


