class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string…")
   } 
} 

var obj1= new StringPrinter() 
obj1.doPrint()