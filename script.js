const perso = document.getElementById("perso");
const jumpsound = document.querySelector("#jumpsound");

let positionX = 100; // position de départ
let enSaut = false; // le saut désactivé par défaut

document.addEventListener("keydown", () => {
  switch (event.code) {
    case "ArrowRight":
      positionX += 15;
      perso.style.left = positionX + "px";
      break;

    case "ArrowLeft":
      positionX -= 15;
      perso.style.left = positionX + "px";
      break;

    case "ArrowUp":
      if (!enSaut) {
        enSaut = true;
        jumpsound.currentTime = 0;
        jumpsound.play();
        perso.style.bottom = "160px";
        setTimeout(() => {
          perso.style.bottom = "60px";
          setTimeout(() => (enSaut = false), 100);
        }, 100);
      }
      break;
    default:
      //aucune action pour les autres touche

      break;
  }
});

