export default class Services {
  static async getPokemon(name) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();

      return data.sprites.front_default;
    } catch (err) {
      console.error("Hiba a Pokemon lekérésnél:", err);
      return null;
    }
  }
}
