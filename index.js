// create a player object with two keys name and chips
var Name = ""
let Chips=0
let chipScore = 0
let player = {
    name: Name,
    chips: Chips
}
let cards =[]
let sum = 0
let i
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let userInputEl = document.getElementById("userInput-el")
let saveUserEl = document.getElementById("saveUser-el")


userInputEl.style.visibility = 'hidden'
saveUserEl.style.visibility = 'hidden'

playerEl.textContent = player.name + ": " + "$" + player.chips

function createUser(){
    userInputEl.style.visibility = 'visible'
    saveUserEl.style.visibility = 'visible'
}

function saveUser(){
    Name = document.getElementById("userInput-el").value
    Chips = 0
    chipScore= 0
    let x = getPlayer()

    userInputEl.style.visibility = 'hidden'
    saveUserEl.style.visibility = 'hidden'
}

function getPlayer() {
    let player = {
        name: Name,
        chips: Chips
    }
    let playerEl = document.getElementById("player-el")
    playerEl.textContent = player.name + ": " + "$" + player.chips
}

function getRandomCards() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message="Do you want to draw a new card again?"
    }
    else if (sum === 21){
        message="You've got a Blackjack"
        hasBlackJack= true
    }
    else {
        message="You're out of the game"
        isAlive = false
    }
    messageEl.innerText = message
}

function startGame() {
        isAlive = true
        let firstCard = getRandomCards()
        let secondCard = getRandomCards()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
}
   
function newCard() {
    if (isAlive === false) {
        messageEl.textContent = "You are out of the game. Start a new game"
        cardsEl.textContent = "cards: "
        sumEl.textContent = "Sum:"
        
    }
    else if (isAlive == true && hasBlackJack == true){
        chipScore += 10
        Chips = chipScore
        console.log(Chips)
        messageEl.textContent = "Congratulations!!! You Won a Blackjack. Start a new game"
        cardsEl.textContent = "cards: "
        sumEl.textContent = "Sum:"
        let x = getPlayer()
        isAlive = false
        hasBlackJack= false
    }
    else {
        let thirdCard = getRandomCards()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
        }

}

