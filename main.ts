import { WeaponBuilder } from "./builders/WeaponBuilder.ts";
import { WeaponFactorySelector } from "./factory/WeaponFactorySelector.ts";
import { BuildConfiguration } from "./interfaces/BuildConfiguration.ts";
import { TankBuild } from "./builds/TankBuild.ts";
import { StealthBuild } from "./builds/StealthBuild.ts";
import { SniperBuild } from "./builds/SniperBuild.ts";
import { BalancedBuild } from "./builds/BalancedBuild.ts";

function main() {

    console.log(`
        ------------------------------
        METRO WEAPON SYSTEM
        ------------------------------
        `);

    // Pregunta al usuario el tipo de arma
    const weaponChoice = prompt(`
        Choose your weapon

        A  Assault Rifle
        S  Sniper Rifle
        SH Shotgun
        `);

    // Obtiene la fábrica correspondiente
    const factory = WeaponFactorySelector.createFactory(weaponChoice ?? "");

    if (!factory) {

        console.log("Invalid weapon option");
        return;

    }

    // Factory Method crea el arma base
    const weapon = factory.createWeapon();

    // Builder recibe el arma para modificarla
    const builder = new WeaponBuilder(weapon);

    // Pregunta la configuración deseada
    const buildChoice = prompt(`
        Choose your build

        T  Tank
        ST Stealth
        SN Sniper
        B  Balanced
        `);

    let build: BuildConfiguration;

    // Selecciona la build
    switch (buildChoice) {

        case "T":
            build = new TankBuild();
            break;

        case "ST":
            build = new StealthBuild();
            break;

        case "SN":
            build = new SniperBuild();
            break;

        case "B":
            build = new BalancedBuild();
            break;

        default:

            console.log("Invalid build option");
            return;

    }

    // Aplica la configuración elegida
    build.build(builder, weapon);

    // Obtiene el arma terminada
    const finalWeapon = builder.build();

    // Muestra la información del arma
    finalWeapon.displayInfo();

}

main();