// Taking URL comming from name-input.html and separate key-value from queryString
var queryDict = {};
location.search.substr(1).split('&')
.forEach(
  function (item) {
    queryDict[item.split('=')[0]] = item.split('=')[1];
  }
);

// displaying the name of the players in dice-game.html
document.querySelector('#player1').innerHTML = queryDict.firstPlayerName;
document.querySelector('#player2').innerHTML = queryDict.secondPlayerName;

// taking random number from [1-6] to represent dice faces
var diceIndex1 = Math.round(Math.random() * 6) + 1;
var diceIndex2 = Math.round(Math.random() * 6) + 1;

// changing the dice image as per the random number which represent the dice faces
document.querySelector('.game-start-btn').onclick = changeDiceImg(diceIndex1, diceIndex2);

function changeDiceImg(diceIndex1, diceIndex2) {

  // getting the current object of both player images
  var currentImg = document.querySelectorAll('.dice-image');

  // calling player dice image function
  changeDiceImg1(currentImg, diceIndex1);
  changeDiceImg2(currentImg, diceIndex2);

  // displaying the winning player
  if (diceIndex1 > diceIndex2)
    document.querySelector('.big-heading').innerHTML = '🚩 ' + queryDict.firstPlayerName + ' Wins!';
  else if (diceIndex1 < diceIndex2)
    document.querySelector('.big-heading').innerHTML = queryDict.secondPlayerName + ' Wins! 🚩';
  else if (diceIndex1 === diceIndex2)
    document.querySelector('.big-heading').innerHTML = '🚩 !..Tie..! 🚩';
}

// sub function for player 1
function changeDiceImg1(currentImg, diceIndex1) {
  if (diceIndex1 == 1)
    currentImg[0].setAttribute('src', 'images/dice1.png');
  else if (diceIndex1 == 2)
    currentImg[0].setAttribute('src', 'images/dice2.png');
  else if (diceIndex1 == 3)
    currentImg[0].setAttribute('src', 'images/dice3.png');
  else if (diceIndex1 == 4)
    currentImg[0].setAttribute('src', 'images/dice4.png');
  else if (diceIndex1 == 5)
    currentImg[0].setAttribute('src', 'images/dice5.png');
  else
    currentImg[0].setAttribute('src', 'images/dice6.png');
}

// sub function for player 2
function changeDiceImg2(currentImg, diceIndex2) {
  if (diceIndex2 == 1)
    currentImg[1].setAttribute('src', 'images/dice1.png');
  else if (diceIndex2 == 2)
    currentImg[1].setAttribute('src', 'images/dice2.png');
  else if (diceIndex2 == 3)
    currentImg[1].setAttribute('src', 'images/dice3.png');
  else if (diceIndex2 == 4)
    currentImg[1].setAttribute('src', 'images/dice4.png');
  else if (diceIndex2 == 5)
    currentImg[1].setAttribute('src', 'images/dice5.png');
  else
    currentImg[1].setAttribute('src', 'images/dice6.png');
}
