import { Observer } from "./Observer.ts";

// Contrato para cualquier objeto que pueda ser observado
export interface Subject {

    // Agrega un observador
    addObserver(observer: Observer): void;

    // Elimina un observador
    delObserver(observer: Observer): void;

    // Notifica a todos los observadores
    notifyObserver(message: string): void;

}