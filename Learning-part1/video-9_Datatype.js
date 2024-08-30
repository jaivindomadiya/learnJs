const score = 95 // number
const scorevalue = 95.5  //number

let outsidetemprature = null //null
let IsloggedIn = true // boolean

let email = undefined // undefined
let email2 //undefined

const id = Symbol('123')  //symbol value is always unique
const anotherId = Symbol('123')

console.log(id===anotherId) //false because of unique value

const bigNumber = 123456789n
//console.log(BigInt)


//Non-premitive DataType
//array
const heroes = ["ram","krishna","hari"] 
console.log(heroes)

//object
let myObj = {
    name:"jaivin",
    age : "22"
};
console.log(myObj);

//function
const myFunction =  function(){
    console.log("Hello World!");
}  
myFunction(); //call functions

console.log("***************************************");

console.log(typeof myObj);  //typeof is use for show datatype

console.log(typeof heroes);
console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//two types of memory stack and heap
