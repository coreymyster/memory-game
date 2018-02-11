let cards = document.querySelector('#container');
let icons = [1, 2, 3, 4, 5, 6, 7, 8];

document.addEventListener("DOMContentLoaded", function() {

  for (let i = 1; i <= 16; i++) {
    icons.sort(function() {return 0.5 - Math.random});
    let randomIcons = icons[Math.floor(Math.random() * icons.length)];
    let memoryCard = document.createElement('div');
    memoryCard.textContent = randomIcons;
    cards.appendChild(memoryCard);
  }
});
