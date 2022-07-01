import read from 'readline-sync';
import { Monstre } from "../combattants/monstre";
import { Combattant } from "../combattants/combattant";
import { Personnage } from "../combattants/personnage";
import { Classe } from '../classes/classe';
import { ClassesConfig } from './classes.config';
import { Groupe } from '../combattants/groupe';

const CLASSES = ClassesConfig.initClasses();

export class Monde {

    static personnageFactory() : Personnage {
        let nom : string = read.question("Entrez le nom du personnage : ")
        let personnage : Personnage = new Personnage(nom, 100, 10, Monde.demanderClasse());
        return personnage;
    }

    static groupePersonnageFactory(nombre: number) : Groupe {
        let combattants : Combattant[] = [];
        let nom : string = read.question("Entrez le nom du groupe : ")
        for(let i = 0; i<nombre; i++) {
            combattants.push(Monde.personnageFactory());
        }
        return new Groupe(nom, combattants);
    }

    static monstreFactory() : Monstre {
        let monstre : Monstre = new Monstre(Monde.genererNom(), 20, 10);
        return monstre;
    }

    static groupeMonstreFactory(nombre: number) : Groupe {
        let combattants : Combattant[] = [];
        let nom : string = read.question("Entrez le nom du groupe : ")
        for(let i = 0; i<nombre; i++) {
            combattants.push(Monde.monstreFactory());
        }
        return new Groupe(nom, combattants);
    }

    static combat(combattant1: Combattant, combattant2: Combattant) {
        console.log(`---------------DEBUT DU COMBAT------------`);

        let tour : number = 1;
        
        while(!combattant1.estMort() && !combattant2.estMort()) {
            console.log(`------------TOUR N°${tour}------------`);
            if(tour % 2 != 0) {
                combattant1.attaquer(combattant2)
            } else {
                combattant2.attaquer(combattant1)
            }
            tour++;
            read.question("");
        }
        
        console.log(`---------------FIN DU COMBAT------------`);
        Monde.afficherGagnant(combattant1, combattant2);
        
    }

    private static afficherGagnant(combattant1: Combattant, combattant2: Combattant) {
        if (combattant1.estMort()) {
            console.log(`${combattant2.nom} a tué ${combattant1.nom}`);
        } else {
            console.log(`${combattant1.nom} a tué ${combattant2.nom}`);
        }
    }

    static afficherChoixClasse() {
        console.log("----- Classes disponibles -----");
        for(let classe of CLASSES) {
            console.log(classe[0]);
        }
    }

    static demanderClasse() : Classe {
        let choixUtilisateur : string = "";
        do {
            Monde.afficherChoixClasse();
            choixUtilisateur = read.question("Choisir une classe :")
        } while(!CLASSES.get(choixUtilisateur))

        return CLASSES.get(choixUtilisateur)!
    }

    static genererNom() : string {
        let debutNom : string[] = ["chat", "chien", "loup", "ours"];
        let finNom : string[] = ["de la mort", "de feu", "des profondeurs", "maléfique"];

        let indexDebut : number = Math.floor(Math.random() * debutNom.length);
        let indexFin : number = Math.floor(Math.random() * finNom.length)

        let nom : string = `${debutNom[indexDebut]} ${finNom[indexFin]}`;
        return nom;
    }

    static afficherInformations() : void {
        throw new Error("Not implemented yet")
    }
}