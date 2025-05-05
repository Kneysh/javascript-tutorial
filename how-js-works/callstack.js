// Callstack
/**
 * Whenever a function is called, it creates an stack and after execution completes it comes out of the stack.
 * In nested functions, every function goes to the stack one by one and follow Last-in-First-out (LiFo) rule.
*/

// example code-1:
function one(){
    console.log("Calling function one.")
}

function two(){
    console.log("Calling function two")
}

function three(){
    console.log("Calling function three.")
}

// First one() goes to the stack, after execution it comes out. Then two() goes and comes out. Finally three() goes and comes out.


// example code-2:
function one(){
    console.log("Calling function two ....")
    two();
}

function two(){
    console.log("Calling function three ....")
    three();
}

function three(){
    console.log("Called all three function one by one.")
}

// First one() goes to the stack and calls two(). Then two() goes on top of one() and calls three(). Finally three() goes and executes. After that, three() comes out first, then two(), and finally one().