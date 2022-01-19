
//spread operator
let origArrayOne = [ 1, 2, 3];                          
let origArrayTwo = [ 4, 5, 6];                          
 
console.log("Input array 1= "+origArrayOne); 
console.log("Input array 2= "+origArrayTwo); 

//Create new array from existing array
let copyArray = [...origArrayOne];    
console.log("Copied array= "+copyArray);                  
 
//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8];              
console.log("Copied array with more elements = "+newArray); 

//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo];
console.log(mergedArray);
console.log("Merged array= "+mergedArray); 

//let origObjectOne = {a: 1, b: 2, c: 3};               
//let origObjectTwo = {d: 4, e: 5, f: 6};               

//Object destructuring
var rect = { x: 0, y: 10, width: 15, height: 20 };
console.log("x = "+ x +" rect.x= "+rect.x);
// Destructuring assignment
var {x, y, width, height} = rect;
console.log("After desructuring ="+x, y, width, height)


console.log("Array destructuring ");
 //Array destructuring
 function myFunction(x:number, y:number, z:number) { 
    console.log( x );
    console.log( y );
    console.log( z );
}

//Array destructuring
var parametersArray:[number,number,number] = [0, 1, 2];
myFunction(...parametersArray);

/*for(let i=0;i<arr.length;i++)
{
    total=ttoal+arr[i]
}*/

//rest parameter 10,20
function getTotal(...numbers: number[]): number {
    let total = 0;
    /*numbers.forEach((10) => total = total+10);
    total=10
    ((20) => total = total+20);
    total =30
    ((30) => total = total+30);
    total =60*/
    numbers.forEach((n) => total += n);
    return total;
}
console.log(getTotal()); 
console.log(getTotal(10, 20)); 
console.log(getTotal(10, 20, 30)); 



/*A typescript template string (or template literal) is a regular JavaScript string which is 
enclosed within the back-tick characters (`) seeded with multiple placeholders denoted with ${ }. 
At runtime, the code replaces the placeholders with their real values.*/
const sname: String = 'Lokesh';
const age: number = 35;
 
let message: string = `My name is ${ sname } and my age is ${ age }`;
 
console.log(message); 
let message1: string = `My name is 
                ${ sname } 
                and
                my age is 
                ${ age }`;
                console.log(message1);