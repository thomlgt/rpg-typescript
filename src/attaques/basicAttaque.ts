import { Attaque } from "./attaque";

export class BasicAttaque implements Attaque {

    constructor(public nom: string, public degats: number, public chanceToucher: number) {}

    lancerAttaque(): number {
        let result : number = 0;
        let rand : number = Math.round(Math.random() *100);
        if(rand > this.chanceToucher) {
            console.log("L'attaque a échouée...");
        } else {
            result = this.degats;
        }
        return result;
    }

}