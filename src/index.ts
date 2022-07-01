import { Attaque } from "./attaques/attaque";
import { BasicAttaque } from "./attaques/basicAttaque";
import { Combattant } from "./combattants/combattant";
import { Monstre } from "./combattants/monstre";
import { Personnage } from "./combattants/personnage";
import { Monde } from "./config/monde";


let p: Combattant = Monde.groupePersonnageFactory(1);

let m: Combattant = Monde.groupeMonstreFactory(2);

Monde.combat(p, m);
