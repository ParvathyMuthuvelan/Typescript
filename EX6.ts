



var message : string = "hello world";       //string
var NumberVar: number = 100;                //number
var BooleanVar : boolean = true;           //boolean
var ArrayVar: string[] ; 

//function with argument and with return value

function add(x: number, y: number): number {
  return x + y;
}
//function with argument and no return value

function showMessage(str:string):void
{
  console.log(str);
}
// function without argument and no return value
function display():void
{
  console.log("fn display called");
 
}
//function without argument and with return value
function sayHello(): string { 
    return 'Hello!';
} 


var cities1: string[] = ['Delhi', 'New York', 'London'];
 
var cities2: Array<string> =['Delhi1', 'New York', 'London'];

let notSure: any = 4;
 
/*var v1=10; // can be redeclared
var v1=20;

let num1      //no type is defined.
let num2
 
num1=100;
num2="hello"; 
 //let num1=40; //error -cannot be redeclared

console.log(num1+num2)*/ 
//calling functions
var result:number=add(2,3);
console.log("sum of 2 numbers="+result);
display();
console.log("sum of 2 numbers="+add(2,3));

console.log("Function without argument and no return value "+sayHello()) 

console.log("ShowMessage Function with argument and no return value");
showMessage("Hello");


console.log("Array created as string[]"+cities1);
console.log("Array created as Array<String>"+cities1);

//anonymous objects
var student: { id: number; name: string; }; 
student = { id: 100, name : "Rahul" }
console.log("Student data="+student.id +" "+student.name)