var scores, roundScore, activePlayer, gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying) {
    //select random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';
    //Update the round score If the rolled number was not a 1
    if (dice !== 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
       // Next player
       nextPlayer();
    }
  }
});
function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add ('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
// functionality for the hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying){
    // adding current score to global score
    scores[activePlayer] += roundScore;

    // Update the Ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check for winner
    if (scores[activePlayer] >= 100)
    {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';//display the player as winner
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.dice').style.display = 'none';
      gamePlaying = false;
    }
    else {
      // Next player
      nextPlayer();
    }
}
});
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;
 //document.querySelector('#score-0').textContent = dice;
 //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
 //var x = document.querySelector('#score-0').textContent
 //console.log(x);

 document.querySelector('.dice').style.display = 'none';
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.querySelector('#name-0').textContent = 'Player-1';
 document.querySelector('#name-1').textContent = 'Player-2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
