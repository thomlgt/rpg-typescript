export interface Combattant {
    nom: string;
    pdv: number;
    degats: number;

    attaquer(adversaire: Combattant) : void;
    defendre(degats: number) : void;
    estMort() : boolean;
}