let i = 0;

function counter() {
  let sum = 0;
  for(let i=0; i<1000000000; i++)
  {
    sum += i;
  }
  postMessage(sum);
}

counter();