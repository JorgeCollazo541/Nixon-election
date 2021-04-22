let voteMcGovern = document.getElementById("voteMcGovern")
let mcGovernChoice = document.getElementById("McGovernChoice")

mcGovernChoice.onmouseover = function(){
    voteMcGovern.style.animationPlayState = "running"
}
mcGovernChoice.onmouseout = function(){
    voteMcGovern.style.animationPlayState = "paused"
}

voteMcGovern.onclick = function(){
    if(confirm('Are you sure')){
        if(confirm('But are you really sure')){
            if(confirm('But why')){
                if(confirm('There are two options but you choose this one')){
                    if(confirm('We have free toast if you vote for Nixon')){
                        if(confirm('Come on. Free toast!')){
                            if(confirm('sorry you took too long to decide and you burned the toast')){
                                document.getElementById("vote").src = "img/Vote McGovern.png"
                            }else {
                                alert('Smart choice')
                            };
                        }else {
                            alert('Smart choice')
                        };
                    }else {
                        alert('Smart choice')
                    };
                }else {
                    alert('Smart choice')
                };
            }else {
                alert('Smart choice')
            };  
        }else {
            alert('Smart choice')
        };
    } else {
        alert('Smart choice')
    }
};

