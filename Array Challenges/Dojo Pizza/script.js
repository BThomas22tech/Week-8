function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
return pizza;

}

let p1 = pizzaOven("deep dish","traditional", ["mozzarella"],["pepperoni", "sausage"]);
let p2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"],["mushrooms", "olives","onions"]);
let p3 = pizzaOven("stuffed crust","ranch", ["mozzarella"],["chicken", "mushrooms"]);
let p4 = pizzaOven("thin crust","traditional", ["american"],["pepperoni", "sausage"]);
// console.log(p1,p2,p3,p4);


var crustType = [
"deep dish",
"hand tossed",
"stuffed crust",
"thin crust"
]
var sauceType = [
    "traditional",
    "ranch",
    "BBQ"
]
var cheeses =[
    "mozzarella",
    "american",
    "provolone"
]
var toppings =[
    "sausage",
    "peperoni",
    "chicken",
    "olives"
]

function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var pizza = {}
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
return pizza
}
console.log(randomPizza());