// Contrato para todos los filtros
export interface FilterStrategy {

    // Devuelve el nombre del filtro
    getName(): string;

    // Devuelve la duracion del filtro en minutos
    getDuration(): number;

}