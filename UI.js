export default class UI {
  constructor() {
    this.grid = document.getElementById("game");
    this.info = document.getElementById("info");
  }

  render(game, player) {
    this.grid.innerHTML = "";

    for (let y = 0; y < game.meret; y++) {
      for (let x = 0; x < game.meret; x++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        if (player.helyzet.x === x && player.helyzet.y === y) {
          if (player.kep) {
            let img = document.createElement("img");
            img.src = player.kep;
            img.style.width = "40px";
            cell.appendChild(img);
          } else {
            cell.innerText = "⚡";
          }
        }

        game.termesek.forEach((t) => {
          if (t.x === x && t.y === y) {
            cell.innerText = t.tipus;
          }
        });

        this.grid.appendChild(cell);
      }
    }
  }

  frissitInfo(player, uzenet) {
    this.info.innerHTML = `
        <p>Név: ${player.nev}</p>
        <p>Élet: ${player.elet}</p>
        <p>Pont: ${player.pont}</p>
        <p>Helyzet: (${player.helyzet.x}, ${player.helyzet.y})</p>
        <p>Hátizsák: ${player.hatizsak.join(", ")}</p>
        <p>${uzenet}</p>
    `;
  }
}
