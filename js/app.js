let cards = document.querySelector('#container');
let icons = [
  "img/computer-monitor.png",
  "img/computer-monitor.png",
  "img/location-pin.png",
  "img/location-pin.png",
  "img/play-button.png",
  "img/play-button.png",
  "img/shopping-bag.png",
  "img/shopping-bag.png",
  "img/camera.png",
  "img/camera.png",
  "img/phone.png",
  "img/phone.png",
  "img/cloud.png",
  "img/cloud.png",
  "img/messages.png",
  "img/messages.png"
];

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
    memoryCard.innerHTML = `<img src=${icons[i]} width="35px">`;
    cards.appendChild(memoryCard);
  }
});

memoryCard.addEventListener('click', function(e) {
  return e;
})
