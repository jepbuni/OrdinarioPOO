import { Weapon } from "../models/Weapon.ts";

// Representa un rifle de precision
export class SniperWeapon extends Weapon {

    constructor() {

        super();

        this.name = "Valve Sniper";
        this.category = "Sniper Rifle";

        this.damage = 95;
        this.stability = 75;
        this.mobility = 40;
        this.stealth = 50;

    }

}