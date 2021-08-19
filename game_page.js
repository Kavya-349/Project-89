var player1_name = localStorage.getItem("Player 1");
var player2_name = localStorage.getItem("Player 2");

var actual_answer = "";

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

    actual_answer = parseInt(number1)*parseInt(number2);

    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br> Answer : <input type='text' id='input_checkbox'> "
    check_button = "<br><br> <button onclick='check()' class='btn btn-info'>Check</button>"
    row = question + input + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check() {
    answer_taken = document.getElementById("input_checkbox").value;
    answer = parseInt(answer_taken);

    //checking the answer
    if(answer == actual_answer) {
        if(answer_turn == "player1") {
            score1 = score1 + 1;
            console.log("score of player1 : "+score1);
            document.getElementById("player1-score").innerHTML = score1;
        }
        if(answer_turn == "player2") {
            score2 = score2 + 1;
            console.log("score of player2 : "+score2);
            document.getElementById("player2-score").innerHTML = score2;
        }
    }


    //changing question turn
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("ques_turn").innerHTML = player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("ques_turn").innerHTML = player1_name;  
    }

    //changing answer turn
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("ans_turn").innerHTML = player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("ans_turn").innerHTML = player1_name;  
    }

    document.getElementById("input_checkbox").value = " ";
    document.getElementById("output").innerHTML = "";
}
















