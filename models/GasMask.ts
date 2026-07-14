import { FilterStrategy } from "../interfaces/FilterStrategy.ts";
import { Subject } from "../interfaces/Subject.ts";
import { Observer } from "../interfaces/Observer.ts";

// Representa la mascara de gas del jugador
export class GasMask implements Subject {

    // Filtro instalado actualmente
    private filter?: FilterStrategy;

    // Tiempo restante del filtro
    private remainingTime: number = 0;

    // Lista de observadores
    private observers: Observer[] = [];

    // Instala un nuevo filtro
    installFilter(filter: FilterStrategy): void {

        this.filter = filter;
        this.remainingTime = filter.getDuration();

        this.notify(`New filter installed: ${filter.getName()} (${this.remainingTime} minutes)`);

    }

    // Reduce un minuto del filtro
    consumeMinute(): void {

        if (!this.filter) {

            this.notify("No filter installed.");
            return;

        }

        if (this.remainingTime > 0) {

            this.remainingTime--;

            this.notify(`Remaining time: ${this.remainingTime} minute(s)`);

        }

        if (this.remainingTime === 0) {

            this.notify("WARNING: Replace your gas filter immediately.");

        }

    }

    // Devuelve el tiempo restante
    getRemainingTime(): number {

        return this.remainingTime;

    }

    // Agrega un observador
    attach(observer: Observer): void {

        this.observers.push(observer);

    }

    // Elimina un observador
    detach(observer: Observer): void {

        this.observers = this.observers.filter(o => o !== observer);

    }

    // Notifica a todos los observadores
    notify(message: string): void {

        for (const observer of this.observers) {

            observer.update(message);

        }

    }

}