
// function alwaysHungry(arr) {
//     var foodCount = 0
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] == "food"){
//             console.log("yummy");
//             foodCount++;
//         }
//     }
//     if (foodCount == 0){
//         console.log("Im hungry");
//     }
//     }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     var cutoff = 4;
//     for (i =0; i<arr.length; i++)
//         if(arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//         console.log(cutoff);
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// //Given an array of numbers return a count of how many of the numbers are larger than the average.

// function betterThanAverage(arr) {
//     var sum = 0;

//     for (var i = 0; i <arr.length; i++){
//         sum += arr[i];
//     }

//     var avg = sum / arr.length;
//     var count = 0;
    
//     for (var i = 0; i<arr.length; i++) {
//         if(arr[i] > avg) {
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);

// //Write a function that will reverse the values an array and return them.

// function reverse(arr) {
//     arr.reverse();
//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// //Fibonacci numbers have been studied for years and appear often in nature. 
// // Write a function that will return an array of Fibonacci numbers up to a given length n. 
// // Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// // So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     while (fibArr.length < n){
//         var prev = fibArr[fibArr.length-1];
//         var prevprev = fibArr[fibArr.length-2];
//         fibArr.push(prev + prevprev);
//     }
//     return fibArr;
//     }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// function sumOfOneAndLength(arr){
//     var one = arr[0]
//     if(typeof(one) == "number"){
//         sum = one + arr.length
//     return arr[0] + arr.length}
    
// }

// console.log(sumOfOneAndLength([45,79,65,15,35]))
// console.log(sumOfOneAndLength(["what?",79,65,15,35]))

// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
// function posNumbers(){
// for(var i = 0; i < numbers.length; i++){
//         if(numbers[i] >= 0){
//         countPositives++;
//         }
// }   
// }
// // posNumbers();

// console.log("there are " + countPositives + " positive values");

// function reverse(arr){
//         var left = 0;
//         var right = arr.length-1;
//         while (left < right){
//                 var temp = arr[left];
//                 arr[left] = arr[right];
//                 arr[right] = temp;
//                 left++;
//                 right--; }
        
//         return arr
//         }
// var results = reverse(["a", "b", "c", "d", "e"]);
// console.log(results);


// var left = ' # # # #';
// var right = "# # # # ";
// var space = " ";


// for (var i = 0; i < 8; i++){
//         if( i % 2 == 0){
//         space += left + "\n"
//         }
//         else space += right + "\n"
// }
// console.log(space);
// Shift Array Values

// Create a function that given an array,
//  moves all values forward by one index removing the first and leaving a '0'
//   value at the end. Example: [1,2,3,4,5,6] should return [2,3,4,5,6,0]

// function move(arr){
// for (var i = 0; i <arr.length; i++)
//         arr[0] = arr[1];
//         arr[1] = arr[2];
//         arr[2] = arr[3];
//         arr[3] = arr[4];
//         arr[4] = arr[5];
//         arr.pop();
//         arr.push(0);
// return console.log(arr);
        
// }
// move([1,2,3,4,5,6]);


// var life = [
//         "It is certain.",
//         "It is decidedly so.",
//         "Without a doubt.",
//         "Yes definitely.",
//         "You may rely on it.",
//         "As I see it, yes.",
//         "Most likely.",
//         "Outlook good.",
//         "Yes.",
//         "Signs point to yes.",
//         "Reply hazy, try again.",
//         "Ask again later.",
//         "Better not tell you now.",
//         "Cannot predict now.",
//         "Concentrate and ask again.",
//         "Don't count on it.",
//         "My reply is no.",
//         "My sources say no.",
//         "Outlook not so good.",
//         "Very doubtful."
// ];

// function lifesQ(){

//         const help = life[Math.floor(Math.random() * life.length)];
//         return help

// }
// console.log(lifesQ())

function d6() {
        var roll = Math.floor(Math.random()*6) + 1;
        if (roll <= 6){
        }
        return roll;
}
        
        var playerRoll = d6();
        console.log("The player rolled: " + playerRoll);
    

        var monster = {
                id: 1,
                name: "Bulbasaur",
                types: ["poison", "grass"]
            };
            
            console.log(monster.name);
            console.log(monster.types[1])