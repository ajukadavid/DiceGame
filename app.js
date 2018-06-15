/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

var gamePlaying = true;

init()

// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>'




var roll = document.querySelector(".btn-roll").addEventListener('click', function () {

  if(gamePlaying){
        //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice_2 = Math.floor(Math.random() * 6 + 1)   
    //2. Display the result
/*
    var dice_2DOM = document.querySelector(".dice_2")
    dice_2DOM.style.display = 'block';
    dice_2DOM.src = 'dice-' + dice_2 + '.png';
*/

    var diceDOM = document.querySelector(".dice")
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
  }
        
    //Update roll number is score was not a 1

  
  if(dice !== 1){
            var bothDice = dice + dice_2;
            roundScore += bothDice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;      
    }
    else{
        console.log('one was rolled')
        nextPlayer()
    }
        //add score
    
        
    

   
})



document.querySelector('.btn-hold').addEventListener('click', function(){
    
if(gamePlaying){
    //add CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;

//Update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//Check if player won the game
if(scores[activePlayer] >= 50){
    document.querySelector('#name-' + activePlayer).textContent = 'WInner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    gamePlaying = false; 
}else{
    nextPlayer();
}

}    
    
    //Next player
})


function nextPlayer() {

    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';


}




document.querySelector('.btn-new').addEventListener('click', init)

// function setScore(){
//   //GET VALUE FROM FORM
//         console.log('form got')

//   //UPDATE VALUE TO SCORE VARIABLE

// }

function init(){
    scores = [0, 0];

   roundScore = 0;

    activePlayer = 0;

document.querySelector(".dice").style.display = 'block';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')

document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')

document.querySelector('.player-0-panel').classList.add('active')

}