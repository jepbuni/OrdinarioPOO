import { Observer } from "../interfaces/Observer.ts";

// Representa el reloj del jugador
export class ClockObserver implements Observer {

    // Muestra la alerta en el reloj
    update(message: string): void {

        console.log(`
        ------------------------------
        WATCH
        ------------------------------
        ${message}
        ------------------------------
        `);

    }

}