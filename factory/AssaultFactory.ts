import { Weapon } from "../models/Weapon.ts";
import { WeaponFactory } from "./WeaponFactory.ts";
import { AssaultRifleWeapon } from "../weapons/AssaultRifleWeapon.ts";

// Fabrica de rifles de asalto
export class AssaultFactory implements WeaponFactory {

    // Crea un rifle de asalto
    createWeapon(): Weapon {

        return new AssaultRifleWeapon();

    }

}