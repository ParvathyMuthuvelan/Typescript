//var 
//Hoisting is allowed with var
v1=5;
console.log(v1);
var v1;



function f1()
{
    var a=10;

    
}
//console.log(a) --error

var b=10;
b=20; //reassigning is possible

var b=100; //redeclaring is possible

for (var j = 0; j < 3; j++) {
  //console.log(a)
  console.log(j);
}
console.log(j);


//let
//Hoisting - is not allowed
/*num1=1; 
console.log(num1);
let num1;*/

for (let i = 0; i < 3; i++) {
  //console.log(a)
  console.log(i);
}

let num=100;
num=50; //reassigning the value is possible
//let num=20; redeclaring is not possible

//console.log(i); error


//const
{
  const x = 3;

  console.log(x);
  //x=5; -reassigning is not possible
  //const x=4; -redeclaring is not possible
  //x=x+1
}
//console.log(x); -- error

//Hoisting - not allowed for const
/*c=2;
const c;*/


