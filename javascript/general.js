function voter(name, id, favPress){
    let voter = {}
    name = prompt('What is your name', "");
    id = prompt('What is your id number', "");
    favPress = prompt('What president are you considering voting for', "Nixon");

    voter['name'] = name
    voter['id'] = id
    voter['favPres'] = favPress

}

window.addEventListener("load", voter);


// document.body.oncontextmenu = function(){
//     event.preventDefault();
//     alert("Sorry but this is not for you")
// }
