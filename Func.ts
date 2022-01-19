//function with optional parameter
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"Sai");
disp_details(111,"Sai","Sai@xyz.com");

//function with Rest Parameters
function addNumbers(...nums:number[]) {  
   var i:number;   
   var sum:number = 0; 
   console.log("Array size="+nums.length)
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)
addNumbers(10,20,30,40);

//Function with default paramenters
function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)


//anonymous function without argument
var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())


 //Anonymous function with parameters
var res = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(res(12,2)) 

//var res = new Function( [arguments] ) { ... }.

//Example
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

//Arrow functions  (lamba expressions)
var myfunction = () => {  
   console.log("It is an Arrow Function");     
  };  

myfunction();

var display = (x:number) => {  
   console.log(x);  
}  
display(140);  