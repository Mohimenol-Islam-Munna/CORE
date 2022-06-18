function recFunc(x) {
  if (x >= 10) {
    return x;
  }

  console.log("recursive function");

  recFunc(x + 1);
}

recFunc(0);
