let myNumber=15;
let binaryNumber="";
while(myNumber>0){
  if(myNumber%2==0){
    binaryNumber= "0" + binaryNumber;
  } else{
    binaryNumber= "1" + binaryNumber;
  }
myNumber=Math.floor(myNumber/2);
}
let int = +binaryNumber;
console.log(int);
console.log(typeof(int));