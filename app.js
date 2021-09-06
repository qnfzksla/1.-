const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
    document.body.style.background = "black";
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  },
  handlewindowcopy: function() {
  alert("신재");
  },
  handlewindowoffline: function() {
  alert("뚜뚜뚜...");
  },
  handlewindowonline: function() {
  alert("연결완료 ㅇㅂㅇ");  
  },
  handletitleclick: function() {
  const currentcolor = h2.style.color;
  let newcolor;
  if (currentcolor=== "blue") {
    newcolor = "tomato";
  } else{
  newcolor = "blue";
  }
  h2.style.color = newcolor;
  },
  };

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);

window.addEventListener("copy", superEventHandler.handlewindowcopy);
window.addEventListener("offline",superEventHandler.handlewindowoffline);
window.addEventListener("online",superEventHandler.handlewindowonline);
h2.addEventListener("click",superEventHandler.handletitleclick );