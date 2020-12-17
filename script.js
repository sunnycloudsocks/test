var play = document.getElementByClassName("play");
document.getElementByClassName("play").style.backgroundColor = "red";
play.addEventListener("mouseenter", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
  document.getElementByClassName("play").style.backgroundColor = "red";
}
