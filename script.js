var play = document.getElementByClassName("play");
play.addEventListener("mouseenter", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
  document.getElementByClassName("play").style.backgroundColor = "red";
}
