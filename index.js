// One dice at once.
// The page title depends on who is the winner.

// function goDice1() {
//   var randomNumber1 = Math.floor(Math.random() * 6) +1;
//   var diceLeft = document.querySelector(".dice .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
//   return randomNumber1;
// }
//
// function goDice2() {
//   var randomNumber2 = Math.floor(Math.random() * 6) +1;
//   var diceRight = document.querySelector(".dice .img2").setAttribute("src", "images/dice"+randomNumber2+".png");
//   return randomNumber2;
// }
//
// function goDice() {
//   goDice1();
//   goDice2();
//
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector(".container h1").innerHTML = " U+1F3C6 Player 1 wins!";
//   } else if (randomNumber1 < randomNumber2) {
//     document.querySelector(".container h1").innerHTML = "Player 2 wins! U+1F3C6";
//   } else {
//     document.querySelector(".container h1").innerHTML = "Draw!";
//   }
// }


// Two dices at once.
// The page title depends on who is the winner.
// The function is called when a user clicks on the dice image.
function goDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) +1;
  var diceLeft = document.querySelector(".dice .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
  var randomNumber2 = Math.floor(Math.random() * 6) +1;
  var diceRight = document.querySelector(".dice .img2").setAttribute("src", "images/dice"+randomNumber2+".png");

  if (randomNumber1 > randomNumber2) {
    return document.querySelector(".container h1").innerHTML = "🏆 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    return document.querySelector(".container h1").innerHTML = "Player 2 wins! 🏆";
  } else {
    return document.querySelector(".container h1").innerHTML = "Draw!";
  }
}
