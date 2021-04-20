let voteNixon = document.getElementById("voteNixon")
let nixonChoice = document.getElementById("NixonChoice")

nixonChoice.onmouseover = function(){
    voteNixon.style.background = "red"
}
nixonChoice.onmouseout = function(){
    voteNixon.style.background = "#bb0000"
}

voteNixon.onclick = function(){
    document.getElementById("vote").src = "img/Vote Nixon.png"
    document.getElementById("voteMcGovern").disabled = true;
}