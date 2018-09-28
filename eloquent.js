1. Minimum
function min(a,b){if (a>b){return b;} else if (a<b){return a;} else {return "equal";}}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


2. Recursion
function isEven(N){if (N===0){return 'true';} else if (N===1){return 'false';} else {N=N-2;return isEven(N);}}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

2. Recursion(the way I fix it)
function isEven(N){if (N===0){return 'true';} else if (N===1){return 'false';} else if (N<0){return 'negative';} else {N=N-2;return isEven(N);}}

3.Bean counting
function countBs(string){return countChar(string,"B");}

function countChar(string,target){var x=0;
for (var N=0; N<string.length; N++)
{if (string[N]==target){x++;}} return x;}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4