alert("Remember the sequence from level to level. Compete with your friends and see who has the highest audio-visual memory. Enjoy!!");
var colorBtns = ["green", "red", "yellow", "blue"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (started == false) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animationBtn(userChosenColour);

    checkAns(userClickedPattern.length - 1);
})

function checkAns(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        $("h1").text("GAME OVER PRESS A KEY TO RESTART.");
        setTimeout(function () {
            playSound("wrong");
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("LEVEL " + level);
    var randomNum = Math.floor(Math.random() * 4); // produces 0-3
    var chosenColor = colorBtns[randomNum];
    gamePattern.push(chosenColor);

    $('#' + chosenColor).animate(animationBtn(chosenColor));
    playSound(chosenColor);

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animationBtn(color) {
    $("#" + color).addClass("btn-flash-animation");
    setTimeout(() => {
        $("#" + color).removeClass("btn-flash-animation");
    }, 100);
}