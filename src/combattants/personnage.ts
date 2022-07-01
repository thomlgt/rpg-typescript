import { Attaque } from "../attaques/attaque";
import { Classe } from "../classes/classe";
import { AbstractCombattant } from "./abstractCombattant";
import { Combattant } from "./combattant";

export class Personnage extends AbstractCombattant{
    
    constructor(nom: string, pdv: number, degats: number, public classe: Classe) {
        super(nom, pdv, degats);
    }

    attaquer(adversaire: Combattant): void {
        let attaque: Attaque = this.classe.getAttaque();
        console.log(`${this.nom} utilise ${attaque.nom} !`);

        let degats = attaque.lancerAttaque();
        console.log(`Il inflige ${degats} points de dégats!`);
        
        adversaire.defendre(degats)
    }
}