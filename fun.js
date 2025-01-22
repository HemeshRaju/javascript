// function p(){
//     function c(){
//         console.log("Nested function")
//     }
//     c()
// }
// p()  


// var a=10
// let b=20
// function p1(){
//     var a="hi"
//     let b="hello"
//     console.log(a)
//     console.log(b)
//     console.log(this.a)
//     console.log(this.b)
// }
// p1()

// lexical scope /scope chain
//-> The ability of js engine search for varible to
//-> find the variable in the current scope and then move to the parent scope and so on
//-> until it finds the variable or reach the global scope

// function main(){
//     let a=10
//     function child(){
//     console.log(a);
    
//     }
//     child()

// }
// main()

//closure()
//-> A closure is a function that has access to its outer function's scope even when the outer
//the binding of child function lexcial scope is to the parent scope is called closure
// eg:-
// function parent(){
//     let a=10
//     function child(){
//         console.log(a)
//         }
//     child()
// }
// parent()
// console.log("start")
// function parent(){
//     let a=10
//     function child(){
//         console.log(a)
//         }
//         return child
//     }
// // let childfn=parent()
// // childfn()
// parent()()

function p(){
    function c1(){
        console.log("c1")
        function c2(){
            console.log("c2")
        }return c2
    }return c1
}
p()()()

