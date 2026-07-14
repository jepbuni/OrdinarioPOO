import { Weapon } from "../models/Weapon.ts";
import { WeaponFactory } from "./WeaponFactory.ts";
import { SniperWeapon } from "../weapons/SniperWeapon.ts";

// Fabrica de rifles de precision
export class SniperFactory implements WeaponFactory {

    // Crea un rifle de precision
    createWeapon(): Weapon {

        return new SniperWeapon();

    }

}