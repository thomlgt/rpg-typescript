import { Classe } from "../classes/classe";
import { AttaquesConfig } from "./attaques.config";

export class ClassesConfig {

    static initClasses() : Map<string, Classe> {
        let classes : Map<string, Classe> = new Map<string, Classe>();
        classes.set("guerrier", new Classe("Guerrier", AttaquesConfig.guerrierAttaques()))
        classes.set("archer", new Classe("Archer", AttaquesConfig.archerAttaques()))
        classes.set("mage", new Classe("Mage", AttaquesConfig.mageAttaques()))
        return classes;
    }
}