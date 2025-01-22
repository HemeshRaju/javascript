(function()
{
    console.log("hi");
})();

((a,b)=>{
    console.log(a+b);
})(10,10);

(function demo()
{
    console.log("hi");
})();

// array in used to store data of an diffrerent data types

//by using new keyword

let arr = new Array(10,20,"hi".true,1n)
console.log(arr);

let arr1=[10,20,"hi"]
console.log(arr1)

let obj = {
    id:1,
    designation:"developer",
    arr:[10,20,30],

}

//by using constructior-function
//used to create an object

function obj1(name, id)
{
    this.name=name;
    this.id=id;
}

let pq = new obj1("he",1)
console.log(pq);