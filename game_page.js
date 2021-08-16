var player1_name = localStorage.getItem("Player 1");
var player2_name = localStorage.getItem("Player 2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1-name").innerHTML =player1_name;
document.getElementById("player2-name").innerHTML =player2_name;

document.getElementById("player1-score").innerHTML = score1;
document.getElementById("player2-score").innerHTML = score2;

document.getElementById("ques_turn").innerHTML = player1_name;
document.getElementById("ans_turn").innerHTML = player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parasInt(number1) * parasInt(number2);

    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br> Answer : <input type='text' id='input_checkbox'> "
    check_button = "<br><br> <button onclick='check()' class='btn btn-info'>"
    row = question + input + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number1").value = "";
}
















