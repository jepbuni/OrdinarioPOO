import { WeaponFactory } from "./WeaponFactory.ts";
import { AssaultFactory } from "./AssaultFactory.ts";
import { SniperFactory } from "./SniperFactory.ts";
import { ShotgunFactory } from "./ShotgunFactory.ts";

// Selecciona la fabrica correspondiente
export class WeaponFactorySelector {

    static createFactory(option: string): WeaponFactory | null{

        switch (option.toUpperCase()) {

            case "A":
                return new AssaultFactory();

            case "S":
                return new SniperFactory();

            case "SH":
                return new ShotgunFactory();

            default:
                return null;

        }

    }

}