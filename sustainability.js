//Initialize variables
let score = 0;
const correctMessage = "You are correct!";
const incorrectMessage = "You are incorrect!";
const displayScore = document.getElementById("scoreNum");
const displaynewItem = document.getElementById("newItem");
const displayResults = document.querySelector(".results");
const displayExplain = document.getElementById("resultsExplain");
const choiceLandfill = document.getElementById("landfill");
const choiceRecycling = document.getElementById("recycling");
const choiceCompost = document.getElementById("compost");

//Create list with all the images, the correct response and the reason they should be place in a specific bin 
const itemsList = [["Banana.png", "compost", "this is because..."], ["Banana.png", "compost", "this is because..."]]
let index = 0;

main();

//Function that gives random number
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//Function that chooses a random number from the itemList and shows it 
function newImage() {
    index = randomInteger(0, itemsList.length - 1);
    displaynewItem.innerHTML = itemsList[index][0];
    
}

//function that checks if the user input is the same as the right answer recorded in itemsList
function checkCorrect(input){
    if (itemsList[index][1] == input) {
        return true;
    } else {
        return false;
    }
}

function main() {
    newImage();

    //Event listeners for user response
    choiceLandfill.addEventListener('click', function() {
        if (checkCorrect("landfill") == true) {
            score++; //increase score
            displayScore.innerHTML = score; //display score

            displayResults.innerHTML = correctMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
        } else {
            displayResults.innerHTML = incorrectMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
        }
    })

    choiceRecycling.addEventListener('click', function(){
        console.log("recycling");
    })

    choiceCompost.addEventListener('click', function(){
        console.log("compost");
    })



}

