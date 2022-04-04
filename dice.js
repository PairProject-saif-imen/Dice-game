var playCount = 0, count1 = 0, count2 = 0;

function displayDice() {

    var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
    var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
    var imageP1 = $("img")[0];
    var imageP2 = $("img")[1];
    imageP1.src = "/images/dice" + dicePlayer1 + ".png";

    imageP2.src = "/images/dice" + dicePlayer2 + ".png";
    var title = document.querySelector("#title");

    if (dicePlayer1 > dicePlayer2) {
        title.textContent = " PLAYER 1 Wins";
        title.classList.add("#title");
        count1++;

    } else if (dicePlayer2 > dicePlayer1) {
        title.textContent = "PLAYER 2 Wins ";
        title.classList.add("#title");
        count2++;


    } else {
        title.textContent = "Twinning ";
        title.classList.add("#title");
    }
    playCount++;

    if (playCount === 5) {
        if (count1 > count2) {
            title.textContent = "Round Winner: PLAYER 1 is Playing  ";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        } else if (count1 < count2) {
            title.textContent = "Round Winner: PLAYER 2 is Playing";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        } else {
            title.textContent = " Oh! No Winner let's do it again";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        }
    }
}
var players = {
    user1: "",
    user2: ""
}

var player1 = $("<h5 id ='u1'></h5>")
$("#player1").append(u1);
var player2 = $("<h5 id ='u2'></h5>")
$("#player2").append(u2);
function savePlayer1(e) {
    players.user1 = e.target.value;
}
function savePlayer2(e) {
    players.user2 = e.target.value;
}

$("#use1").on("change", savePlayer1);
$("#use2").on("change", savePlayer2);


    $("#S").click(function () {
        $("#player1").append(player1);
        $("#player2").append(player2);
    




})
