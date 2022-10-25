let score = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScore = 0
let guestInitialScore = 0

function plusOne(){
  homeScore += 1
  score.textContent = homeScore
}

function plusTwo(){
   homeScore += 2
  score.textContent = homeScore 
}

function plusThree(){
   homeScore += 3
  score.textContent = homeScore 
}

function plusOneGuest(){
  guestInitialScore += 1
  guestScore.textContent = guestInitialScore
}

function plusTwoGuest(){
   guestInitialScore += 2
  guestScore.textContent = guestInitialScore 
}

function plusThreeGuest(){
   guestInitialScore += 3
  guestScore.textContent = guestInitialScore 
}