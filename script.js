var rTriangle = function(rows) {
    if (rows === 0) {
      return 0; 
    } else {
      return rows + rTriangle(rows - 1);
    }
  }
  
  // Test cases
  console.log(rTriangle(0)); // should give 0
  console.log(rTriangle(1)); // should give 1
  console.log(rTriangle(2)); // should give 3
  console.log(rTriangle(3)); // should give 6
  console.log(rTriangle(4)); // should give 10
  console.log(rTriangle(5)); // should give 15
