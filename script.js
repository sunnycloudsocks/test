var play = document.getElementByClassName("play");

play.addEventListener("mouseleave", shrink);

function shrink(){
  document.getElementByClassName("play").className = "shrinkPlay";
}
