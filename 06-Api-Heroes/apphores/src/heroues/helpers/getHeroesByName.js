import { heroes } from "../data/Heroes";

function getHeroeByName(name="") {
 name = name.toLowerCase().trim();

 if (name.length === 0) {
  return [];
 }
 return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
}


export default getHeroeByName;