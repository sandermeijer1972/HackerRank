// Variables named , , and  are declared for you in the editor below. You must use the  operator to perform the following 
// sequence of operations:

// Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
// Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
// Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));
   
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    console.log(firstString + secondString);
};

performOperation("12", "4.32", "is the best place to learn and practice coding!"); // 16, 8.32, ....
