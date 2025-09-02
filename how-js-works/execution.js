/** 
 * JavaScript executes in 3 phase: i) Create Execution Context; ii) Memory creation phase (CP); iii) Execution phase (EP).

 * Execution Context is of two types: i) Global Execution Context (GEC); ii) Functional Execution Context (FEC).
 * Every JS environment (Browser, Node, Bun, Dino etc.) comes with its own GEC and "this" keyword in global scope refers to GEC. For example: Browser's GEC is Window object. 
*/

// Example Code:
let val1 = 10;
let val2 = 15;
function add(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = add(val1, val2);
let result2 = add(3, 4);

// Execution Process:
/**
 * step-1 (GEC): Initiates the Global Execution Context ---> this
 * step-2 (CP): val1 --> undefined;
                val2 --> undefined;
                add --> function definition;
                result1 --> undefined;
                result2 --> undefined;
 * step-3 (EP): val1 --> 10;
                val2 --> 15;

                call add function for result1:
                        step-1 (FEC): Creates the Functional Execution Context ---> this
                                      (new variable environment + execution thread)
                        step-2 (CP): val1 --> undefined;
                                     val2 --> undefined;
                                     total --> undefined;
                        step-3 (EP): num1 --> val1(10);
                                     num2 --> val2(15);
                                     total --> 15; [returns total to the GEC]
                        step-4: Deletes the FEC.
                result1 --> 15;

                call add function for result2:
                        step-1 (FEC): Creates the Functional Execution Context ---> this
                                      (new variable environment + execution thread)
                        step-2 (CP): val1 --> undefined;
                                     val2 --> undefined;
                                     total --> undefined;
                        step-3 (EP): num1 --> 3;
                                     num2 --> 4;
                                     total --> 7; [returns total to the GEC]
                        step-4: Deletes the FEC.
                result2 --> 7;
*/