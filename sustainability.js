//Initialize variables
let score = 0;
const correctMessage = "You are correct!";
const incorrectMessage = "You are incorrect!";
const displayScore = document.getElementById("scoreNum");
const displaynewItem = document.getElementById("newItem");
const displayResults = document.querySelector(".resultsMessage");
const displayExplain = document.querySelector(".resultsExplain");
const choiceLandfill = document.getElementById("landfill");
const choiceRecycling = document.getElementById("recycling");
const choiceCompost = document.getElementById("compost");
const color = ['#284a8c', '#ad3434', '#34ad66'];


//Create list with all the images, the correct response and the reason they should be place in a specific bin 
const itemsList = [["Banana.png", "compost", "This is because bananas are a type of food waste. They are biodegradable and should go into the compost bin!"], 
                    ["PlasticBag.jpg", "landfill", "This is because plastic bags are not recyclable or compostable!"], 
                    ["TeaBag.jpg", "compost", "This is because tea bags are a type of organics!"], 
                    ["AluminiumCan.jpg", "recycling", "This is because aluminium cans can be recycled into other goods!"]];
let index = 0;

//Function that gives random number
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//Function that chooses a random number from the itemList and shows it, does not exit the while loop unless the new index is different than the previous index 
function newImage() {
    let temp = 0;
    temp = index;

    while (temp == index) {
        index = randomInteger(0, itemsList.length - 1);
    }

    displaynewItem.src = itemsList[index][0];
  
}

//function that checks if the user input is the same as the right answer recorded in itemsList
function checkCorrect(input){
    if (itemsList[index][1] == input) {
        return true;
    } else {
        return false;
    }
}



main();

function main() {
    newImage();
    
    //Event listeners for user response
    choiceLandfill.addEventListener('click', function() {
        choiceLandfill.classList.remove("apply-shake");
        if (checkCorrect("landfill") == true) {
            score=score+10; //increase score
            displayScore.innerHTML = score; //display score
            document.querySelector('body').style.background = color[2];

            displayResults.innerHTML = correctMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
        } else {
            document.querySelector('body').style.background = color[1];
            
            choiceLandfill.classList.add("apply-shake");
            displayResults.innerHTML = incorrectMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
            
        }
    })

    choiceRecycling.addEventListener('click', function(){
        choiceRecycling.classList.remove("apply-shake");
        if (checkCorrect("recycling") == true) {
            score=score+10; //increase score
            displayScore.innerHTML = score; //display score
            document.querySelector('body').style.background = color[2];

            displayResults.innerHTML = correctMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
        } else {
            document.querySelector('body').style.background = color[1];
            choiceRecycling.classList.add("apply-shake");
            displayResults.innerHTML = incorrectMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
        }
    })

    choiceCompost.addEventListener('click', function(){
        choiceCompost.classList.remove("apply-shake");
        if (checkCorrect("compost") == true) {
            score=score+10; //increase score
            displayScore.innerHTML = score; //display score
            document.querySelector('body').style.background = color[2];
            displayResults.innerHTML = correctMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
        } else {
            document.querySelector('body').style.background = color[1];

            choiceCompost.classList.add("apply-shake");
            displayResults.innerHTML = incorrectMessage; //display message
            displayExplain.innerHTML = itemsList[index][2]; //display explaination
            newImage();
        }
    })

}

