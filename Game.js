export default class Game {
  constructor(player) {
    this.player = player;
    this.meret = 10;
    this.termesek = this.generalTermesek();
  }

  generalTermesek() {
    let items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        x: Math.floor(Math.random() * this.meret),
        y: Math.floor(Math.random() * this.meret),
        tipus: "🍎",
      });
    }
    return items;
  }

  mozgat(dx, dy) {
    this.player.mozog(dx, dy);

    let talalt = this.termesek.findIndex(
      (t) => t.x === this.player.helyzet.x && t.y === this.player.helyzet.y,
    );

    if (talalt !== -1) {
      let item = this.termesek.splice(talalt, 1)[0];
      this.player.gyujt(item.tipus);
      return "Találtál egy termést!";
    }

    if (this.player.lepesSzamlalo >= 3) {
      return this.player.buntetes();
    }

    return "";
  }
}
