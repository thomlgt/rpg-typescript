import { Attaque } from "../attaques/attaque";
import { BasicAttaque } from "../attaques/basicAttaque";

export class AttaquesConfig {

    static guerrierAttaques() : Attaque[] {
        return [
            new BasicAttaque("Coup léger", 10, 90),
            new BasicAttaque("Coup lourd", 15, 80),
            new BasicAttaque("Coup des cieux", 50, 20)
        ]
    }

    static archerAttaques() : Attaque[] {
        return [
            new BasicAttaque("Flèches simples", 10, 90),
            new BasicAttaque("Flèches de feu", 15, 80),
            new BasicAttaque("Flèches de glace", 50, 20)
        ]
    }

    static mageAttaques() : Attaque[] {
        return [
            new BasicAttaque("Distorsion", 10, 90),
            new BasicAttaque("Boule de feu", 15, 80),
            new BasicAttaque("Boule de glace", 50, 20)
        ]
    }
}