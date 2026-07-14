import { Observer } from "./Observer.ts";

// Contrato para cualquier objeto que pueda ser observado
export interface Subject {

    // Agrega un observador
    add(observer: Observer): void;

    // Elimina un observador
    del(observer: Observer): void;

    // Notifica a todos los observadores
    notify(message: string): void;

}