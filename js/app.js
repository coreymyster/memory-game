let cards = document.querySelector('#container');

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 1; i <= 16; i++) {
    cards.appendChild(document.createElement('div'));
  }
});
