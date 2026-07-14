import { Weapon } from "../models/Weapon.ts";
import { WeaponBuilder } from "../builders/WeaponBuilder.ts";
import { BuildConfiguration } from "../interfaces/BuildConfiguration.ts";

export class BalancedBuild {

    // Aplica todos los cambios de una build balanceada
    build(builder: WeaponBuilder, weapon: Weapon): void {

        builder
            .addScope("Standard Scope")
            .addBarrel("Standard Barrel")
            .addMagazine("Standard Magazine")
            .addStock("Standard Stock")
            .setDamage(weapon.damage + 5)
            .setStability(weapon.stability + 5)
            .setMobility(weapon.mobility + 5)
            .setStealth(weapon.stealth + 5);

    }

}