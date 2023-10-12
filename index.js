// The `receivesAFunction` function
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // The `returnsANamedFunction` function
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      // Function body (can be any code)
      console.log("This is a named function.");
    };
  }
  
  // The `returnsAnAnonymousFunction` function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      // Function body (can be any code)
      console.log("This is an anonymous function.");
    };
  }
  
  // Example usage:
  receivesAFunction(function () {
    console.log("Callback function called.");
  });
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Call the named function
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Call the anonymous function
  