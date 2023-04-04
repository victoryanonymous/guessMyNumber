'use strict';
let number = Math.trunc(Math.random()*20)+1;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
let score=20;
let highscore=0;
const scoreChanger = function(){
    score--;
    document.querySelector('.score').textContent=score;
}
const highscoreChanger = function(){
    document.querySelector('.highscore').textContent=score;
}
// console.log(number);
document.querySelector('.check').addEventListener('click',function() {
    let guess=Number(document.querySelector('.guess').value);
    //console.log(guess);
    if(score > 1){
        if(!guess){
            displayMessage('⛔️ No number!');
        }
        else if(guess < number){
            displayMessage('📉 too low');
            scoreChanger();
        }
        else if(guess > number){
            displayMessage('📈 too high');
            scoreChanger();
        }
        else if(number === guess){
            displayMessage('🎉 correct answer');
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').textContent=number;
            if(score > highscore){
                highscore=score;
                highscoreChanger();
            } 
        }  
    }
    else{
        displayMessage('😥 You Lost the Game');
    }
})
document.querySelector('.again').addEventListener('click',function(){
    displayMessage('Start guessing...');
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='black';
    number= Math.trunc(Math.random()*20)+1;
})