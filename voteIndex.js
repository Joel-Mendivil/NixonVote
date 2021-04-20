//When page loads up, it automatically displays the following paragraph in the HTML
window.onload = () => {
    var para = document.createElement("p");
    var node = document.createTextNode("A new paragraph was created using JavaScript! Also, try to right click the title.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
    alert("Things may not look as what it may seem! You've been warned.")
}

//Calculates the position of the mouse pointer when hovering over the vote buttons
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}

//Changes the color of the paragraph when clicked on by the user
function thisFunction(elmnt, clr) {
    elmnt.style.color = clr;
}

//Results after selecting one president
document.getElementById('nixon').addEventListener("click", nixonVote);

function nixonVote(){
    alert("You have voted for McGovern. Thank you :)");
    alert("SIKE!!!! REJECT PRESIDENTS!! EMBRACE CRAIG");
    document.getElementById('nixon').removeEventListener("click", nixonVote);
    document.body.style.backgroundImage = "url('Images/craig.png')";
}

document.getElementById('mcgovern').addEventListener("click", mcGovernVote)

function mcGovernVote(){
    alert("You have voted for Nixon. Thank you :)");
    alert("SIKE!!!! REJECT PRESIDENTS!! EMBRACE CRAIG");
    document.getElementById('mcgovern').removeEventListener("click", mcGovernVote);
    document.body.style.backgroundImage = "url('Images/craig.png')";
}

//Prevents the title of the page from being right clicked
const noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

//Changes the images of the vote buttons when being hovered on by the user
function nixonMouseOver() {
    document.getElementById('betterNixon').src = "Images/betternixon.png";
}

function nixonMouseLeave() {
    document.getElementById('betterNixon').src = "Images/nixon.jpeg";
}

function mcGovernMouseOver() {
    document.getElementById('betterMcGovern').src = "Images/bettermcgovern.png";
}

function mcGovernMouseLeave() {
    document.getElementById('betterMcGovern').src = "Images/mcgovern.png";
}