import { Weapon } from "../models/Weapon.ts";

// Representa una escopeta
export class ShotgunWeapon extends Weapon {

    constructor() {

        super();

        this.name = "Shambler";
        this.category = "Shotgun";

        this.damage = 90;
        this.stability = 45;
        this.mobility = 55;
        this.stealth = 20;

    }

}