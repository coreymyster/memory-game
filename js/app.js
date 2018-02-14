let cards = document.querySelector('#container');
let selectedIcon = document.querySelector('div');
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

/*let icons = [
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
];*/

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
  // future comment - the icons array should be two array concatenated
  // into one and THEN shuffle
  shuffle(icons);
  for (let i = 0; i < 16; i++) {
    let memoryCard = document.createElement('div');
    memoryCard.innerHTML = `<img src=${icons[i]} width="35px">`;
    cards.appendChild(memoryCard);
  }
});

// Takes in the item clicked and saves it in an array
// then clear the array after two clicks
let clicks = [];
selectedIcon.addEventListener('click', function(e) {
  clicks.push(e.target);
  while (clicks.length >= 2) {
  if(clicks[0].src != clicks[1].src) {
    console.log("Wrong answer");
  } else {
    console.log("Correct answer!");
  }
  clicks.splice(0, 2);
}
})
