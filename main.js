function addUser(){
    var player_1 = document.getElementById("p1").value;
    var player_2 = document.getElementById("p2").value;

    localStorage.setItem("Player 1", player_1);
    localStorage.setItem("Player 2", player_2);

    window.location = "game_page.html";

    document.getElementById("player1name").innerHTML = player_1 + ":";
    document.getElementById("player2name").innerHTML = player2 + ":";
}