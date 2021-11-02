//spread operator
let origArrayOne = [ 1, 2, 3];                          
let origArrayTwo = [ 4, 5, 6];                          
 
//Create new array from existing array
let copyArray = [...origArrayOne];                      
 
//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8];              
 
//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo];
console.log(mergedArray);

let origObjectOne = {a: 1, b: 2, c: 3};               
let origObjectTwo = {d: 4, e: 5, f: 6};               
 //destructuring
function myFunction(x:number, y:number, z:number) { 
    console.log( x );
    console.log( y );
    console.log( z );
}

 
var parametersArray:[number,number,number] = [0, 1, 2];
 
myFunction(...parametersArray);

//rest parameter
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
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