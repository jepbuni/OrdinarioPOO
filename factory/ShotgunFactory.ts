import { Weapon } from "../models/Weapon.ts";
import { WeaponFactory } from "./WeaponFactory.ts";
import { ShotgunWeapon } from "../weapons/ShotgunWeapon.ts";

// Fabrica de escopetas
export class ShotgunFactory implements WeaponFactory {

    // Crea una escopeta
    createWeapon(): Weapon {

        return new ShotgunWeapon();

    }

}