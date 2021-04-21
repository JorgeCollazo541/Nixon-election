let mcGovernField = document.getElementById("mcGovernField")
let butter = document.getElementById("butter")

mcGovernField.onmousemove = function(event) {

    // window-relative field coordinates
    let mcGovernFieldCoords = this.getBoundingClientRect();

    // the butter has position:absolute, the field: position:relative
    // so butter coordinates are relative to the field inner left-upper corner
    let butterCoords = {
      top: event.clientY - mcGovernFieldCoords.top - mcGovernField.clientTop - butter.clientHeight / 2,
      left: event.clientX - mcGovernFieldCoords.left - mcGovernField.clientLeft - butter.clientWidth / 2
    };

    // prevent crossing the top field boundary
    if (butterCoords.top < 0) butterCoords.top = 0;

    // prevent crossing the left field boundary
    if (butterCoords.left < 0) butterCoords.left = 0;


    // // prevent crossing the right field boundary
    if (butterCoords.left + butter.clientWidth > mcGovernField.clientWidth) {
      butterCoords.left = mcGovernField.clientWidth - butter.clientWidth;
    }

    // prevent crossing the bottom field boundary
    if (butterCoords.top + butter.clientHeight > mcGovernField.clientHeight) {
      butterCoords.top = mcGovernField.clientHeight - butter.clientHeight;
    }

    butter.style.left = butterCoords.left + 'px';
    butter.style.top = butterCoords.top + 'px';

}

butter.onclick = function() {
  var i;
  for(i = 0; i < 3; i++){
    alert("try voting for someone else, they might have toast")
  }
}
