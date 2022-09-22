// ----------------- Recursive Function -------------- 
// 1. This function can call itself
// 2. It has a base condition for terminate. 

function recFunc(x) {
  if (x >= 10) {
    return x;
  }

  console.log("recursive function");

  recFunc(x + 1);
}

recFunc(0);
