import { FilterStrategy } from "../interfaces/FilterStrategy.ts";

// Filtro de mayor duracion
export class ExtendedFilter implements FilterStrategy {

    // Devuelve el nombre del filtro
    getName(): string {

        return "Extended Filter";

    }

    // Devuelve la duracion del filtro
    getDuration(): number {

        return 3;

    }

}