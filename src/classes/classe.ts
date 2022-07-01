import { Attaque } from "../attaques/attaque";

export class Classe {

    constructor(public nom: string, public attaques: Attaque[]) {}

    getAttaque() : Attaque {
        let rand : number = Math.floor(Math.random() * this.attaques.length);
        return this.attaques[rand];
    }
}