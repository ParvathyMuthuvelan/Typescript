class Car { 
   //field 
   color:string;
   model:string; 
   
   //constructor 
   constructor(model:string,color:string) { 
      console.log("cons called");
      this.model = model ;
      this.color=color;
   }  
   
   //function 
   display():void { 
      console.log("Model   :   "+this.model);
      console.log("Color   : "+this.color); 
   } 
} 

//create an object 
var obj = new Car("Maruti","Grey");
var obj1 = new Car("Honda","Red")
var obj2 = new Car("Etios","White")

//access the field 
console.log("Reading attribute value model :  "+obj.model)  
console.log("Reading attribute value color :  "+obj.color)  

//access the function
console.log("Car 1=")
obj.display()
console.log("Car 2=")
obj1.display()
console.log("Car 3=")
obj2.display()