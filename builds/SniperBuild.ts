import { Weapon } from "../models/Weapon.ts";
import { WeaponBuilder } from "../builders/WeaponBuilder.ts";
import { BuildConfiguration } from "../interfaces/BuildConfiguration.ts";

export class SniperBuild {

    // Aplica todos los cambios de una build de precision
    build(builder: WeaponBuilder, weapon: Weapon): void {

        builder
            .addScope("Long Range Scope")
            .addBarrel("Precision Barrel")
            .addMagazine("Sniper Magazine")
            .addStock("Precision Stock")
            .setDamage(weapon.damage + 25)
            .setStability(weapon.stability + 15)
            .setMobility(weapon.mobility - 10)
            .setStealth(weapon.stealth + 10);

    }

}