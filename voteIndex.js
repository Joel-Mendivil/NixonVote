//When page loads up, it automatically displays the following paragraph in the HTML
window.onload = () => {
    var para = document.createElement("p");
    var node = document.createTextNode("A new paragraph using JavaScript!");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
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