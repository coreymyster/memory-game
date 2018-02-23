let cards = document.querySelector('#container');
let selectedIcon = document.querySelector('div');
let counter = document.querySelector('.correct');
let playerPerformance = document.querySelector('.performance');
let restart = document.querySelector('.restart');
let modal = document.querySelector('section');
let innerModal = document.querySelector('.modal');
let playAgain = document.querySelector('.playAgain');
let count = 0;

let originalIcons = [
  {id: 1, img: "img/computer-monitor.png"},
  {id: 2, img: "img/location-pin.png"},
  {id: 3, img: "img/play-button.png"},
  {id: 4, img: "img/shopping-bag.png"},
  {id: 5, img: "img/camera.png"},
  {id: 6, img: "img/phone.png"},
  {id: 7, img: "img/cloud.png"},
  {id: 8, img: "img/messages.png"}
];

// Map through originalIcons array twice and then concat the arrays into one
let firstIco = originalIcons.map(icon => icon.img);
let secondIco = originalIcons.map(icon => icon.img);
let icons = firstIco.concat(secondIco);

// Using the Fisher-Yates shuffle algorithm to shuffle items in icons array
function shuffle(arr) {
  var m = arr.length, temp, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

// When the DOM loads cycle through the random array and display
// the random indexes in created div elements
document.addEventListener("DOMContentLoaded", function() {
  shuffle(icons);
  for (let i = 0; i < 16; i++) {
    let memoryCard = document.createElement('div');
    memoryCard.className="cards";
    memoryCard.innerHTML = `<img class="hidden" src=${icons[i]} width="30px">`;
    cards.appendChild(memoryCard);
  }
  counter.innerHTML=`<p>Correct Answers: ${count}</p>`;
  playerPerformance.innerHTML=`<p><img src="img/perfect-score.png"></p>`;
  restart.innerHTML=`<img src="img/refresh.png">`;
});

// Takes in the item clicked and saves it in an array
// then clears the array after two clicks
let clicks = [];
let correctAnswers = [];
let totalClicks = [];
selectedIcon.addEventListener('click', function(e) {
  console.log(e);
  clicks.push(e.target);
  totalClicks.push(e.target);
  e.target.firstElementChild.classList.toggle('hidden');
  setTimeout(function() {
  while (clicks.length >= 2) {
  if(clicks[0].innerHTML != clicks[1].innerHTML) {
    console.log("Wrong answer");
    //If items don't match, then re-toggle the 'hidden' class to
    // hide the items again
    clicks[0].firstElementChild.classList.toggle('hidden');
    clicks[1].firstElementChild.classList.toggle('hidden');
  } else {
    console.log("Correct answer!");
    correctAnswers.push(e.target);
    count += 1;
  }
  clicks.splice(0, 2);


  if (correctAnswers.length === 8) {
    modal.style.visibility="visible";
    innerModal.innerHTML=`<h2>Congratulations, you win!</h2>
      <p>You correctly guessed all ${correctAnswers.length} matches</p>
      <p>You finished with a score of ${playerPerformance.innerHTML}</p>
      <inpiut type="button" class="playAgain" onClick="window.location.reload()">Play again</input>`;
  }
  // Updates the counter for every matched selection
  counter.innerHTML=`<p>Correct Answers: ${count}</p>`

// Star rating moves down dpeending on number of clicks
  if (totalClicks.length > 43) {
    playerPerformance.innerHTML=`<p><img src="img/no-score.png"></p>`;
  } else if (totalClicks.length >= 32 && totalClicks.length <= 43) {
    playerPerformance.innerHTML=`<p><img src="img/low-score.png"></p>`;
  } else if (totalClicks.length >= 25 && totalClicks.length < 32) {
    playerPerformance.innerHTML=`<p><img src="img/medium-score.png"></p>`;
  } else {
    playerPerformance.innerHTML=`<p><img src="img/perfect-score.png"></p>`;

  }
}
}, 1000)
})

// Refresh the page if user wants to start over
restart.addEventListener('click', function() {
  location.reload(true);
})
