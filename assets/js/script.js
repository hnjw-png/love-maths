document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribrute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribrute("data-type");
                alert("You Clicked ${gametype}");
            }
        })
        
    }

})




function runGame(){

}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionAnswer(){

}
function displaySubtractAnswer(){

}
function displayMultiplyAnswer(){

}
