class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      console.log("cons called");
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var obj = new Car("Maruti")
var obj1 = new Car("Honda")
var obj2 = new Car("Etios")
//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  
console.log("Reading attribute value Engine as :  "+obj1.engine)  
console.log("Reading attribute value Engine as :  "+obj2.engine)  
//access the function
obj.disp()