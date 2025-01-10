// let a = function()
// {
//     c=parseInt(prompt())
//     b=parseInt(prompt())
//     console.log(c+b)
// }
// console.log(a())

let p=function(){
    a=parseInt(prompt())
    b=parseInt(prompt())
    c=parseInt(prompt())
    if(a>b){
        if(a>c){
            console.log(a+"is largest")
        }else{
            console.log(c+"is largest")
        }
    }else{
        if(b>c){
            console.log(b+"is largest")
        }else{
            console.log(c+"is largest")
        }
    }
}
console.log(p())