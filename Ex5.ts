interface ILoan { 
   interest:number 
   //fn declaration
   display():void;
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
   display():void
   {
   console.log("Interest for Agriloan :"+this.interest); 
   }
} 

class VehicleLoan implements ILoan{
   interest:number ;
   constructor(interest:number)
   {
this.interest=interest;
   }
   display():void
   {
      console.log("Interest for Vehicleloan :"+this.interest); 
   }
}

var obj1 = new AgriLoan(10,1) 
obj1.display();
var obj2 = new VehicleLoan(15) 
obj2.display();