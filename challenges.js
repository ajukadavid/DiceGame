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

var lastDice;
// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>'




document.querySelector(".btn-roll").addEventListener('click', function () {

  if(gamePlaying){
    //Change Player Names

    var name_1 =  document.querySelector('.player_one').value

  

    document.querySelector('#name-0').textContent = name_1;



    var name_2 =  document.querySelector('.player_two').value


    document.querySelector('#name-1').textContent = name_2;
  
    
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice_2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result


    document.querySelector('#dice').style.display = 'block';
    document.querySelector('#dice_2').style.display = 'block'


    document.getElementById("dice").src = 'dice-' + dice + '.png';
    document.getElementById("dice_2").src = 'dice-' + dice_2 + '.png';


    if(dice === 6 && dice_2 === 6){
      //Player Loses
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer()
    }else if(dice !== 1){
            //Add Score
              roundScore += dice + dice_2;
              document.querySelector("#current-" + activePlayer).textContent = roundScore;
      }
      else{
          nextPlayer()
      }
      document.querySelector('.player_one').style.display = 'none';
      document.querySelector('.player_two').style.display = 'none';

      lastDice = dice;
      
  }

    //Update roll number is score was not a 1



        //add score

})


document.querySelector('.btn-hold').addEventListener('click', function(){

if(gamePlaying){
    //add CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;

//Update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
var winningScore;
var input = document.querySelector('.final_score').value

if(input){
  winningScore = input
}else {
  winningScore = 100;
}
//Check if player won the game
if(scores[activePlayer] >= winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'WInner';
    document.getElementById("dice").style.display = 'none';
    document.getElementById("dice_2").style.display = 'none';
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


   getDice()

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

    getDice()

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

document.querySelector('.player_one').style.display = 'block';
document.querySelector('.player_two').style.display = 'block';

}

function getDice(){

    document.getElementById("dice").style.display = 'none';
    document.getElementById("dice_2").style.display = 'none';
}