import { Combattant } from "./combattant";

export class Groupe implements Combattant{

    public degats: number;
    public pdv: number;

    constructor(
        public nom: string, 
        public combattants : Combattant[]) {
            this.degats = 0;
            this.pdv = 0;
        }

    attaquer(adversaire: Combattant): void {
        let combattantsVivants = this.getCombattantsVivants();
        let attaquant : Combattant = combattantsVivants[Math.floor(Math.random() * combattantsVivants.length)];
        attaquant.attaquer(adversaire);
    }

    defendre(degats: number): void {
        let combattantsVivants = this.getCombattantsVivants();
        let defenseur : Combattant = combattantsVivants[Math.floor(Math.random() * combattantsVivants.length)];
        defenseur.defendre(degats);
    }

    getCombattantsVivants() : Combattant[] {
        let combattants : Combattant[] = [];
        for(let i = 0; i< this.combattants.length; i++) {
            if(!this.combattants[i].estMort()) {
                combattants.push(this.combattants[i])
            }
        }
        return combattants;
    }

    addCombattant(combattant : Combattant) {
        this.combattants.push(combattant);
    }

    estMort() {
        let result : boolean = true;
        for(let i = 0; i< this.combattants.length; i++) {
            if(!this.combattants[i].estMort()) {
                result = false;
                break;
            }
        }
        return result;
    }
}