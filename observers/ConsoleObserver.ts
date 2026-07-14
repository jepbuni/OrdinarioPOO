import { Observer } from "../interfaces/Observer.ts";

// Observador para mostrar mensajes del sistema
export class ConsoleObserver implements Observer {

    // Muestra el mensaje recibido
    update(message: string): void {

        console.log(`\t[SYSTEM] ${message}`);

    }

}