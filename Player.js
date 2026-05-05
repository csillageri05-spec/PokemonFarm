export default class Player {
  constructor(nev, kep) {
    this.nev = nev;
    this.elet = 100;
    this.pont = 0;
    this.helyzet = { x: 0, y: 0 };
    this.hatizsak = [];
    this.kep = kep;
    this.lepesSzamlalo = 0;
  }

  mozog(dx, dy) {
    this.helyzet.x += dx;
    this.helyzet.y += dy;
    this.lepesSzamlalo++;
  }

  gyujt(item) {
    this.hatizsak.push(item);
    this.pont += 10;
    this.lepesSzamlalo = 0;
  }

  buntetes() {
    this.elet -= 5;
    return "Meg lettél büntetve!";
  }

  initControls(game, ui) {
    document.addEventListener("keydown", (e) => {
      let uzenet = "";

      switch (e.key) {
        case "ArrowUp":
          uzenet = game.mozgat(0, -1);
          break;
        case "ArrowDown":
          uzenet = game.mozgat(0, 1);
          break;
        case "ArrowLeft":
          uzenet = game.mozgat(-1, 0);
          break;
        case "ArrowRight":
          uzenet = game.mozgat(1, 0);
          break;
        default:
          return;
      }

      ui.render(game, this);
      ui.frissitInfo(this, uzenet);
    });
  }
}
