var play = document.getElementByClassName("play");
play.addEventListener("mouseenter", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
}
