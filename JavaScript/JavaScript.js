//console.log("aaaaaaaa")

//***********Question 1*********
// var arr=[1,2,3,4]
// printReverse(arr)
// function printReverse(arr){
//     for(var i=arr.length-1; i>=0; i--){
//         console.log(arr[i])
//     }

// }

//***********Question 2********
// var arr=[2,1,1,1]
// function isUniform(arr){
//     for (var i=0; i<arr.length; i++){
//         if(arr[i]!=arr[0]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isUniform(arr))

//***********Question 3********
// var arr=[10,3,10,4]
// function sumArray(arr){
//     var sum=0
//     for(var i=0; i<arr.length; i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// console.log(sumArray(arr))

//***********Question 4********
// var arr=[10,3,10,4]
// var m=Number.MIN_VALUE
// arr.forEach(function (i){
//         if (i>m){
//             m=i
//         }
//     })
// console.log(m)

var arr=[5,3,9,4]
m=arr[0]
// function func(i){
//     if (i>m){
//         m=i
//     }
// }
function myForEach(arr, func){
    for (var i=0; i<arr.length; i++){
        func(arr[i])
    }
}
myForEach(arr,function func(i){
    if (i>m){
        m=i
    }
})
console.log(m)
