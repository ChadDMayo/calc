//Global variables
const container = document.querySelector('#container');
let displayStats = {
  valueOne: "0",
  valueTwo: "",
  operand: ""
}

//Update intial value
updateDisplay();

//Functions to process on button press
function clearAll(){
  displayStats.valueOne = "0";
  displayStats.valueTwo = "";
  displayStats.operand = "";
  updateDisplay();
}
function clearChar(){
  let temp = (displayStats.valueTwo).split("");
  temp.pop();
  temp.join("");
  displayStats.valueTwo = temp;
  updateDisplay();
}
function addChar(char){
  if (displayStats.operand == ""){
    if (+displayStats.valueOne==0){
      displayStats.valueOne = "";
    }
    displayStats.valueOne = displayStats.valueOne + char;
  }else{
    if (+displayStats.valueTwo==0){
      displayStats.valueTwo = "";
    }
    displayStats.valueTwo = displayStats.valueTwo + char;
  }
  updateDisplay();
}
function addDecimal(){
  let temp = [];
  if (displayStats.operand == ""){
    temp = (displayStats.valueOne).split("");
    if (!(temp.some(ele => ele == "."))){
      addChar(".");
    }
  }else{
    temp = (displayStats.valueTwo).split("");
    if (!(temp.some(ele => ele == "."))){
      addChar(".");
    }
  }
}
function addOperand(newOpp){
  if (displayStats.operand == "" || displayStats.valueTwo == ""){
    displayStats.operand = newOpp;
  }else{
    operate();
    displayStats.operand = newOpp;
  }
  updateDisplay();
}
function operate(){
  switch (displayStats.operand){
    case "+":
      displayStats.valueOne = add(displayStats.valueOne, displayStats.valueTwo);
      break;
    case "-":
      displayStats.valueOne = subtract(displayStats.valueOne, displayStats.valueTwo);
      break;
    case "*":
      displayStats.valueOne = multiply(displayStats.valueOne, displayStats.valueTwo);
      break;
    case "/":
      displayStats.valueOne = divide(displayStats.valueOne, displayStats.valueTwo);
      break;
    case "^":
      displayStats.valueOne = exponent(displayStats.valueOne, displayStats.valueTwo);
      break;
  }
  displayStats.valueTwo = "";
  displayStats.operand = "";
  updateDisplay();
}

//Functions to return results of operate
function add(numOne, numTwo){
  return +numOne + +numTwo + "";
}
function subtract(numOne, numTwo){
  return +numOne - +numTwo + "";
}
function multiply(numOne, numTwo){
  return (+numOne)*(+numTwo) + "";
}
function divide(numOne, numTwo){
  return (+numOne)/(+numTwo) + "";
}
function exponent(numOne, numTwo){
  return (+numOne)**(+numTwo) + "";
}

//Function to update the display area
function updateDisplay(){
  var element = document.getElementById("display");
  element.innerText = displayStats.valueOne + " " + displayStats.operand + " " + displayStats.valueTwo;
}