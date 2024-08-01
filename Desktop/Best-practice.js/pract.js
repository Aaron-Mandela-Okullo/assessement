/*callling from html



document.getElementById('myH1').textContent=`My first dot document content`;
document.getElementById('myP').textContent=`fdkjfjdkjfkdf kfdkjdfjskjd cncjkcmskkjs nchdnsxnxkxs mjcjxnmsm,askjx jxmxskjx`;

outputing on the browser

console.log('gfjfhjfhfjfj');

alerting anything on the screen is 

window.alert('hjfjfmjjff');


 Variable declaration
let age = 28;
let price =234.4;
let gpa =4.0;
console.log(`I am ${age} years old and I bought my bag at $${price} and my gpa was ${gpa}`);


my practice with variables

let firstName = 'Aaron';
let lastName ='Mandela';
let age ='28';
let isStudent=true;
let finishedTuition=true;
 
 document.getElementById('p1').textContent = `My name is ${firstName} ${lastName}`;
 document.getElementById('p3').textContent =`I am ${age} years!`;
 document.getElementById('p4').textContent =console.log('isStudent');//`I am a student of computer ${isStudent}`;
 document.getElementById('p5').textContent =console.log('finishedTuition');//`Did you finish tuition ${finishedTuition}`;

accepting user input
let userName;
userName=window.prompt('What is your user name');
console.log(userName);


let area;
let length;
let widith;

document.getElementById('myanswer').onclick = function(){
  length = Number(length);
  widith =Number(widith);
  length = document.getElementById('myText1').value;
  
  widith = document.getElementById('myText2').value;
  
 area = length * widith;
  
  console.log(area);
  document.getElementById('myh1').textContent =`Your program ran well after a struggle hahhaha and your Answer is: ${area}cm`;
}

let areOfSemiCircle;
const PI = 3.14;
let radius;
document.getElementById('mysubmit').onclick = function(){
  areOfSemiCircle = Number(areOfSemiCircle);
  radius =Number(radius);
  radius = document.getElementById('myradius').value;
  areOfSemiCircle = PI * radius ** 2 / 2;
  console.log(areOfSemiCircle);

  document.getElementById('myh2').textContent = `Great area of the semi- circle is:${areOfSemiCircle}`;

}
 

let areOfTrapezium;
let a;
let b;
let h;

document.getElementById('myNextValue').onclick = function(){


a = document.getElementById('mya').value;
b  =document.getElementById('myb').value;
h = document.getElementById('myh').value;
areOfTrapezium = (1/2)*(a+b)*h;
console.log(areOfTrapezium);
document.getElementById('myp').textContent = `Well done the area is : ${areOfTrapezium}`;
} 

const decreaseBttn = document.getElementById('decreaseBttn');
const resetBttn = document.getElementById('resetBttn');
const increaseBttn = document.getElementById('increaseBttn');
const countLabel = document.getElementById('countLabel');

let count =0;
decreaseBttn.onclick = function(){
  count --;
  countLabel.textContent = count;
}
resetBttn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}
increaseBttn.onclick = function(){
  count ++;
  countLabel.textContent = count;
}

const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2 = document.getElementById('myLabel2');
const myLabel3 = document.getElementById('myLabel3');
const min = 1;
const max = 6;
let count = 0;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
randomNum1 = Math.floor(Math.random()*max ) + min;
randomNum2 = Math.floor(Math.random()*max ) + min;
randomNum3 = Math.floor(Math.random()*max ) + min;
myLabel1.textContent = randomNum1;
myLabel2.textContent = randomNum2;
myLabel3.textContent = randomNum3;
}

 const myLabel = document.getElementById('myLabel');
 const decreaseBttn = document.getElementById('decreaseBttn');
 const resetBttn = document.getElementById('resetBttn');
 const increaseBttn = document.getElementById('increaseBttn');
let count = 0;

decreaseBttn.onclick = function(){ 
count --;
myLabel.textContent = count;

}
resetBttn.onclick = function(){ 
  count = 0;
  myLabel.textContent = count;
  
  }
  increaseBttn.onclick = function(){ 
     count ++;
    myLabel.textContent = count;
    
    }
  Checked property
const mycheckbox = document.getElementById('mycheckBox');
const visa = document.getElementById('myvisa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const result = document.getElementById('result');
const paymentMethod = document.getElementById('paymentMethod');
const mysubmit = document.getElementById('mysubmit');

mysubmit.onclick = function(){

if(mycheckBox.checked){
    result.textContent = `You have subscribed for the channel`;

  }
  else{
    result.textContent = `You have NOT subscribed for the channel: Please subscribe to access the channel`;
  }

if(myvisa.checked){
  paymentMethod.textContent = `You are paying using a Visa card`;

}
 else if(mastercard.checked){
  paymentMethod.textContent = `You are paying using a Mastercard`;
}
else if(paypal.checked){
  paymentMethod.textContent = `You are paying using a Paypal`;
}
else{
  paymentMethod.textContent = `You must select a payment method`;
}


}
*/ 
const myTextBox = document.getElementById('myTextBox');
const toCelcius = document.getElementById('toCelcius');
const toFerenheit = document.getElementById('toFerenheit');
const mySubmit = document.getElementById('mySubmit');
const conversionValue = document.getElementById('conversionvValue');


mySubmit.onclick = function(){
if(toCelcius.checked){
  const myTextBox =document.getElementById('myTextBox').value;
  toCelcius = Math.floor(5/9(myTextBox -32));
  conversionValue.textContent =toCelcius;

}

}