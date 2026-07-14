import { FilterStrategy } from "../interfaces/FilterStrategy.ts";

// Filtro basico
export class BasicFilter implements FilterStrategy {

    // Devuelve el nombre del filtro
    getName(): string {

        return "Basic Filter";

    }

    // Devuelve la duracion del filtro
    getDuration(): number {

        return 1;

    }

}