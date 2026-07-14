import { Weapon } from "../models/Weapon.ts";

export class WeaponBuilder {

    private weapon: Weapon;

    constructor(weapon: Weapon) {

        this.weapon = weapon;

    }

    // Agrega una mira
    addScope(scope: string): WeaponBuilder {

        this.weapon.scope = scope;
        return this;

    }

    // Agrega un cañón
    addBarrel(barrel: string): WeaponBuilder {

        this.weapon.barrel = barrel;
        return this;

    }

    // Agrega un cargador
    addMagazine(magazine: string): WeaponBuilder {

        this.weapon.magazine = magazine;
        return this;

    }

    // Agrega una culata
    addStock(stock: string): WeaponBuilder {

        this.weapon.stock = stock;
        return this;

    }

    // Cambia el daño
    setDamage(damage: number): WeaponBuilder {

        this.weapon.damage = damage;
        return this;

    }

    // Cambia la estabilidad
    setStability(stability: number): WeaponBuilder {

        this.weapon.stability = stability;
        return this;

    }

    // Cambia la movilidad
    setMobility(mobility: number): WeaponBuilder {

        this.weapon.mobility = mobility;
        return this;

    }

    // Cambia el sigilo
    setStealth(stealth: number): WeaponBuilder {

        this.weapon.stealth = stealth;
        return this;

    }

    // Devuelve el arma terminada
    build(): Weapon {

        return this.weapon;

    }

}