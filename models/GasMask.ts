import { FilterStrategy } from "../interfaces/FilterStrategy.ts";
import { Subject } from "../interfaces/Subject.ts";
import { Observer } from "../interfaces/Observer.ts";

// Representa la mascara de gas del jugador
export class GasMask implements Subject {

    // Filtro instalado actualmente
    private filter: FilterStrategy;

    constructor(filter: FilterStrategy) {

        this.filter = filter;
        this.remainingTime = filter.getDuration();

    }

    // Tiempo restante del filtro
    private remainingTime: number = 0;

    // Lista de observadores
    private observers: Observer[] = [];

    // cambia a un nuevo filtro
    replaceFilter(filter: FilterStrategy): void {

        this.filter = filter;
        this.remainingTime = filter.getDuration();

        this.notify(`New filter installed: ${filter.getName()} (${this.remainingTime} minutes)`);

    }

    // Reduce un minuto del filtro
    consumeMinute(): void {

        if (this.remainingTime > 0) {

            this.remainingTime--;

            this.notify(`Remaining time: ${this.remainingTime} minute(s)`);

        }

        if (this.remainingTime === 0) {

            this.notify("WARNING: Replace your gas filter immediately.");

        }

    }

    getFilterName(): string {

        return this.filter.getName();

    }

    // Devuelve el tiempo restante
    getRemainingTime(): number {

        return this.remainingTime;

    }

    // Agrega un observador
    addObserver(observer: Observer): void {

        this.observers.push(observer);

    }

    // Elimina un observador
    delObserver(observer: Observer): void {

        this.observers = this.observers.filter(j => j !== observer);

    }

    // Notifica a todos los observadores
    notifyObserver(message: string): void {

        for (const observer of this.observers) {

            observer.update(message);

        }

    }

}