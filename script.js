var play = document.getElementByClassName("play");
document.getElementById("play").style.color = "none";
play.addEventListener("mouseenter", enlarge);
function enlarge(){
  document.getElementByClassName("play").className = "enlargePlay";
  document.getElementByClassName("play").style.backgroundColor = "red";
}
