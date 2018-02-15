let cards = document.querySelector('#container');
let selectedIcon = document.querySelector('div');
let memoryCard = document.createElement('div');


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
  // future comment - the icons array should be two array concatenated
  // into one and THEN shuffle
  shuffle(icons);
  for (let i = 0; i < 16; i++) {
    let memoryCard = document.createElement('div');
    memoryCard.innerHTML = `<img class="hidden" src=${icons[i]} width="35px">`;
    cards.appendChild(memoryCard);
  }
});

// Takes in the item clicked and saves it in an array
// then clear the array after two clicks
let clicks = [];
selectedIcon.addEventListener('click', function(e) {
  console.log(e);
  clicks.push(e.target);
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
  }
  clicks.splice(0, 2);
}
}, 1000)
})
