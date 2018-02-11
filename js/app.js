let cards = document.querySelector('#container');
let icons = ["..img/computer-monitor.png", 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

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
    memoryCard.innerText = icons[i];
    cards.appendChild(memoryCard);
  }
});

memoryCard.addEventListener('click', function(e) {
  return e;
})
