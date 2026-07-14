import { FilterStrategy } from "../interfaces/FilterStrategy.ts";

// Filtro de uso militar
export class MilitaryFilter implements FilterStrategy {

    // Devuelve el nombre del filtro
    getName(): string {

        return "Military Filter";

    }

    // Devuelve la duracion del filtro
    getDuration(): number {

        return 5;

    }

}