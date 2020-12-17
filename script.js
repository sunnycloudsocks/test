var play = document.getElementByClassName("play");
play.addEventListener("mouseover", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
  document.getElementByClassName("play").backgroundColor = "red";
}
