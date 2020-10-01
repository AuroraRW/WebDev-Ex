var request=require('request')
request('https://jsonplaceholder.typicode.com/todos/1', function(error,response,body){
// eval(require("locus"))
    if(error){
        console.log("Something went wrong!")
        console.log(error)
    }else{
        if(response.statusCode==200){
            console.log(body)
        }
    }
})