let voteMcGovern = document.getElementById("voteMcGovern")
let mcGovernChoice = document.getElementById("McGovernChoice")

mcGovernChoice.onmouseover = function(){
    voteMcGovern.style.background = "blue"
}
mcGovernChoice.onmouseout = function(){
    voteMcGovern.style.background = "#0000aa"
}

voteMcGovern.onclick = function(){
    if(confirm('are you sure')){
        if(confirm('but are you really sure')){
            if(confirm('but why')){
                if(confirm('you know better')){
                    if(confirm('there are two options but you choose this one')){
                        if(confirm('We have free toast if you vote for Nixon')){
                            if(confirm('Come on. Free toast!')){
                                if(confirm('sorry you took too long to decide and you burned the toast')){
                                    document.getElementById("vote").src = "img/Vote McGovern.png"
                                }else {
                                    alert('smart choice')
                                };
                            }else {
                                alert('smart choice')
                            };
                        }else {
                            alert('smart choice')
                        };
                    }else {
                        alert('smart choice')
                    };
                }else {
                    alert('smart choice')
                };
            }else {
                alert('smart choice')
            };  
        }else {
            alert('smart choice')
        };
    } else {
        alert('smart choice')
    }
};

