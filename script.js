var play = document.getElementByClassName("play");
document.getElementById("play").style.color = "red";
play.addEventListener("mouseenter", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
  document.getElementByClassName("play").style.backgroundColor = "red";
}
