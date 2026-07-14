import { Weapon } from "../models/Weapon.ts";

// Define el contrato para todas las fabricas
export interface WeaponFactory {

    createWeapon(): Weapon;

}