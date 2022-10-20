console.log("Im Linked");

result = 0;
num2 = 0;
num1 = 0;

// displayDiv.innerText = "";
var displayDiv = document.querySelector("#display"); 
let button = document.querySelectorAll("buttons");
var ops = "";
var equal = document.getElementById("#equals");


function press(element){
    displayDiv.innerText = element;
    displayDiv.value = displayDiv.innerText;
    if (ops == ""){
    num1 = displayDiv.value}
    else {num2 == displayDiv.value}
    console.log("this is num1 " + num1)
    console.log("this is num2 " + num2)
}

function setOP(el){
    displayDiv.innerHTML = el;
    return el;
}

function clr(){
    displayDiv.innerHTML = 0;
}

function calculate(){
    // num1 = displayDiv.value
    // if (num1 == displayDiv.value){
    //     console.log(num1)
    // }
    // if (ops == "/"){
    //     result = num1/num2
    // }
} 

calculate();
