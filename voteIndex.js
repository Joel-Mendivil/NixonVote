function nixonMouseOver(){
    document.getElementById('betterNixon').src = "Images/betternixon.png";
}

function nixonMouseLeave(){
    document.getElementById('betterNixon').src = "Images/nixon.jpeg";
}

function mcGovernMouseOver(){
    document.getElementById('betterMcGovern').src = "Images/";
}

function mcGovernMouseLeave(){
    document.getElementById('betterMcGovern').src = "Images/";
}

document.body.onload = addElement;

function addElement () {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  }) 
