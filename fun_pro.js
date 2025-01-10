// function main(a){
//     console.log(a());
//     //console.log(a);
// }

// main(function(){
//     return "Hello, World!";
// })

// main(function(){
//     return "Hello, World!1";
// })

// function op(task)
// {
//     console.log(task(10,20))
// }

// op(function(a,b){
//     return a+b;
// })


//  op(function(a,b)
//     {
//         return a-b;
//     })

// op(function(a,b)
//     {
//         return a*b;
//     })

// function cal(task){
//     a=Number(prompt("a="))
//     b=Number(prompt("b="))
//     c=prompt("operator")
//     console.log(task(a,b))
// }

// cal(function(a,b){
//     return a+b; 
//     })

// let a=()=> console.log("hi")  // implict
// // => fat arrow

// let b=()=>{return "hi"}  // explicit
// console.log(b)
// console.log(b())

let main1=(task)=>{ console.log(task(100,10))}
main1((a,b)=>{ return a+b})
main1((a,b)=>{ return a-b})
main1((a,b)=>{ return a*b})
main1((a,b)=>{ return a/b})