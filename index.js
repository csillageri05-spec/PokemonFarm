import Player from "./Player.js";
import Game from "./Game.js";
import UI from "./UI.js";
import Services from "./Services.js";

async function init() {
  const kep = await Services.getPokemon("pikachu");

  const player = new Player("Ash", kep);
  const game = new Game(player);
  const ui = new UI();

  ui.render(game, player);
  ui.frissitInfo(player, "");

  player.initControls(game, ui);
}

init();
