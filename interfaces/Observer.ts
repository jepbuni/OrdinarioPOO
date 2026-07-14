// Contrato para todos los observadores
export interface Observer {

    // Recibe una notificacion cuando cambia el estado de la mascara
    update(message: string): void;

}