import { Weapon } from "../models/Weapon.ts";
import { WeaponBuilder } from "../builders/WeaponBuilder.ts";
import { BuildConfiguration } from "../interfaces/BuildConfiguration.ts";

export class StealthBuild {

    // Aplica todos los cambios de una build sigilosa
    build(builder: WeaponBuilder, weapon: Weapon): void {

        builder
            .addScope("Silent Reflex Scope")
            .addBarrel("Silenced Barrel")
            .addMagazine("Light Magazine")
            .addStock("Light Stock")
            .setDamage(weapon.damage - 5)
            .setStability(weapon.stability + 5)
            .setMobility(weapon.mobility + 20)
            .setStealth(weapon.stealth + 40);

    }

}