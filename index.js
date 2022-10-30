
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;



let player ={

   name: "User",
   chips: 200,

}

let listing = {
  title: "Awesome Castle",
  cost: 190,
  hasPool: false,
  images: ["img/castle1.png", "img/castle2.png"]
}
console.log(listing.title);
console.log(listing.cost);

let playerEl = document.getElementById("player-el");
playerEl.textContent =  player.name + ": $" + player.chips;
let message = "";
let messageEl = document.getElementById('message-el');

let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let nameEl = document.getElementById('name-el');
function changeName(){
  player.name = nameEl.value;
  playerEl.textContent = player.name + ": $" + player.chips;
}


function startGame(){
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  if (firstCard === 11 && secondCard === 11){
    secondCard = 1;
  }
  
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  renderGame();


}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20){
      message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
      player.chips += 50;
      playerEl.textContent = player.name + ": $" + player.chips;
      message = "You've got Blackjack!"
      hasBlackJack = true;
    }
    else{
      player.chips -= 10;
      playerEl.textContent = player.name + ": $" + player.chips;
      message = "You're out of the game!"
      isAlive = false;


    }
    messageEl.textContent = message;

}

function getRandomCard(){
  let randCard = Math.floor(Math.random() * 14) + 1;
  if (randCard === 1 || randCard === 11){
    return 11;
  }
  else if (randCard === 12 || randCard == 13 || randCard === 14){
    return 10;
  }
  else{
    return randCard;
  }
}


function choose1(){
  card = 1;
  cards.push(card);
  sum += card;
  element1.style.visibility = "hidden";
  element2.style.visibility = "hidden";
  renderGame();


}
function choose11(){
  card = 11;
  cards.push(card);
  sum += card;
  element1.style.visibility = "hidden";
  element2.style.visibility = "hidden";
  renderGame();

}
let element1 = document.getElementById("choose1");
let element2 = document.getElementById("choose11");
function newCard(){
  if (isAlive === true  && hasBlackJack === false){
      let card = getRandomCard();
      if (card === 11){
        message = "Would you like to play a 1 or 11";
        messageEl.textContent = message;
        element1.style.visibility = "visible";
        element2.style.visibility = "visible";

        if (answer === 1){
          cards.push(card);
          sum += card;
          renderGame();
        }
        else if (answer === 11){
          cards.push(card);
          sum += card;
          renderGame();
        }
      }
      else{
      cards.push(card);
      sum += card;
      renderGame();}
}
}
