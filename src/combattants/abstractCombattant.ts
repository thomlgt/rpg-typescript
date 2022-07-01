import { Combattant } from "./combattant";

export class AbstractCombattant implements Combattant{

    constructor(
        public nom : string, 
        public pdv: number, 
        public degats: number) {}

    attaquer(adversaire: Combattant): void {
        console.log(`${this.nom} attaque inflige ${this.degats} de dégats!`);
        adversaire.defendre(this.degats)
    }

    defendre(degats: number): void {
        this.pdv -= degats;
        console.log(`Il reste ${this.pdv}pdv à ${this.nom}...`);
    }

    estMort(): boolean {
        let result : boolean = false;
        if(this.pdv <= 0) {
            result = true;
        }
        return result;
    }

    toString() : string {
        return `{nom : ${this.nom} | pdv : ${this.pdv} | degats : ${this.degats}}`
    }
}