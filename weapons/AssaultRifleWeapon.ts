import { Weapon } from "../models/Weapon.ts";

// Representa un rifle de asalto
export class AssaultRifleWeapon extends Weapon {

    constructor() {

        super();

        this.name = "Kalash 2012";
        this.category = "Assault Rifle";

        this.damage = 70;
        this.stability = 60;
        this.mobility = 65;
        this.stealth = 30;

    }

}