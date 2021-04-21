let voteNixon = document.getElementById("voteNixon")
let nixonChoice = document.getElementById("NixonChoice")

nixonChoice.onmouseover = function(){
    voteNixon.style.animationPlayState = "running"
}
nixonChoice.onmouseout = function(){
    voteNixon.style.animationPlayState = "paused"
}

voteNixon.onclick = function(){
    document.getElementById("vote").src = "img/Vote Nixon.png"
    document.getElementById("voteMcGovern").disabled = true;
    document.body.style.cursor = "url('../img/toast.png'), default"
}