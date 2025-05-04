let luckyNumber = 10;
let guess = Math.floor((Math.random()*10)+1);

while(luckyNumber != guess){
  console.log(`No, It isn't ${guess}`);
  guess = Math.floor(Math.random()*10)+1;
}
console.log(`My Lucky Number is ${guess}`);