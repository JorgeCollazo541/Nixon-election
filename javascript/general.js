document.body.onload = function(){
    let voter = {}
    let name = prompt('what is your name', "");
    let id = prompt('What is your id number', "");
    let favPres = prompt('What president are you considering voting for', "Nixon");

    voter["Name"] = name; 
    voter["ID"] = id; 
    voter["Favorite President"] = favPres; 

    alert(`Hello ${this.voter["Name"]}, we are glad you decided to vote and are deciding to vote for Nixon`)
}

document.body.oncontextmenu = function(){
    event.preventDefault();
    alert("dont think so buddy")
}