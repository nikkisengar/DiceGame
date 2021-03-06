// Taking URL comming from name-input.html and separate key-value from queryString
var queryDict = {};
location.search.substr(1).split('&')
  .forEach(
    function (item) {
      queryDict[item.split('=')[0]] = item.split('=')[1];
    }
  );

// displaying the name of the players in dice-game.html
var playerFirst = queryDict.firstPlayerName;
var playerSecond = queryDict.secondPlayerName;

// Getting names from URL without + sign, which means that we are getting the inout name with spaces
// before this code when we write name with spaces in name-input.html
// file than, while getting the names from URL will comes with + sogn
if (playerFirst.includes('+')) {
  while (playerFirst.includes('+')) {
    playerFirst = playerFirst.replace('+', ' ');
  }

  document.querySelector('#player1').innerHTML = playerFirst;
} else {
  document.querySelector('#player1').innerHTML = playerFirst;
}

// Getting names from URL without + sign, which means that we are getting the inout name with spaces
// before this code when we write name with spaces in name-input.html
// file than, while getting the names from URL will comes with + sogn
if (playerSecond.includes('+')) {
  while (playerSecond.includes('+')) {
    playerSecond = playerSecond.replace('+', ' ');
  }

  document.querySelector('#player2').innerHTML = playerSecond;
} else {
  document.querySelector('#player2').innerHTML = playerSecond;
}

// changing the dice image as per the random number which represent the dice faces
//document.getElementById('game-play-btn').onclick = changeDiceImg(diceIndex1, diceIndex2);
document.getElementById('game-start-btn').addEventListener('click', function () {
  changeDiceImg();
});

// Function Starts
function changeDiceImg() {

  console.log('changeDiceImg Starts'); // getting the current object of both player images
  var currentImg = document.querySelectorAll('.dice-image');

  // taking random number from [1-6] to represent dice faces
  var diceIndex1 = Math.floor(Math.random() * 6) + 1;
  var diceIndex2 = Math.floor(Math.random() * 6) + 1;

  // calling player dice image function
  changeDiceImg1(currentImg, diceIndex1);
  changeDiceImg2(currentImg, diceIndex2);

  // displaying the winning player
  if (diceIndex1 > diceIndex2)
    document.querySelector('.big-heading').innerHTML =
    '🚩 ' + playerFirst + ' Wins!';
  else if (diceIndex1 < diceIndex2)
    document.querySelector('.big-heading').innerHTML = playerSecond + ' Wins! 🚩';
  else if (diceIndex1 === diceIndex2)
    document.querySelector('.big-heading').innerHTML = '🚩 !..Tie..! 🚩';
  console.log('changeDiceImg End');
}

// sub function for player 1
function changeDiceImg1(currentImg, diceIndex1) {
  console.log('changeDiceImg1 Starts' + diceIndex1);
  currentImg[0].setAttribute('src', 'images/dice' + diceIndex1 + '.png');
  console.log('changeDiceImg1 End' + diceIndex1); // if (diceIndex1 == 1)
  //   currentImg[0].setAttribute('src', 'images/dice1.png');
  // else if (diceIndex1 == 2)
  //   currentImg[0].setAttribute('src', 'images/dice2.png');
  // else if (diceIndex1 == 3)
  //   currentImg[0].setAttribute('src', 'images/dice3.png');
  // else if (diceIndex1 == 4)
  //   currentImg[0].setAttribute('src', 'images/dice4.png');
  // else if (diceIndex1 == 5)
  //   currentImg[0].setAttribute('src', 'images/dice5.png');
  // else
  //   currentImg[0].setAttribute('src', 'images/dice6.png');
}

// sub function for player 2
function changeDiceImg2(currentImg, diceIndex2) {
  console.log('changeDiceImg2 Starts' + diceIndex2);
  currentImg[1].setAttribute('src', 'images/dice' + diceIndex2 + '.png');
  console.log('changeDiceImg2 End' + diceIndex2); // if (diceIndex2 == 1)
  //   currentImg[1].setAttribute('src', 'images/dice1.png');
  // else if (diceIndex2 == 2)
  //   currentImg[1].setAttribute('src', 'images/dice2.png');
  // else if (diceIndex2 == 3)
  //   currentImg[1].setAttribute('src', 'images/dice3.png');
  // else if (diceIndex2 == 4)
  //   currentImg[1].setAttribute('src', 'images/dice4.png');
  // else if (diceIndex2 == 5)
  //   currentImg[1].setAttribute('src', 'images/dice5.png');
  // else
  //   currentImg[1].setAttribute('src', 'images/dice6.png');
}
