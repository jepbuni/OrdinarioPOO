import { Weapon } from "../models/Weapon.ts";
import { WeaponBuilder } from "../builders/WeaponBuilder.ts";

// Contrato para todas las configuraciones de armas
export interface BuildConfiguration {

    build(builder: WeaponBuilder, weapon: Weapon): void;

}