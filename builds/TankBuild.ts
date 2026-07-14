import { Weapon } from "../models/Weapon.ts";
import { WeaponBuilder } from "../builders/WeaponBuilder.ts";
import { BuildConfiguration } from "../interfaces/BuildConfiguration.ts";

export class TankBuild {

    // Aplica todos los cambios de una build tanque
    build(builder: WeaponBuilder, weapon: Weapon): void {

        builder
            .addScope("Heavy Combat Scope")
            .addBarrel("Reinforced Barrel")
            .addMagazine("Extended Magazine")
            .addStock("Heavy Stock")
            .setDamage(weapon.damage + 15)
            .setStability(weapon.stability + 20)
            .setMobility(weapon.mobility - 15)
            .setStealth(weapon.stealth - 10);

    }

}