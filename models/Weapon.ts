// Clase base para todas las armas
export class Weapon {

    public name: string = "Unknown Weapon";
    public category: string = "Unknown Category";

    public scope?: string;
    public barrel?: string;
    public magazine?: string;
    public stock?: string;

    public damage: number = 0;
    public stability: number = 0;
    public mobility: number = 0;
    public stealth: number = 0;

    // Muestra la informacion del arma
    displayInfo(): void {

        console.log(`
        ------------------------------
        Weapon Information
        ------------------------------

        Name: ${this.name}
        Category: ${this.category}

        Attachments

        Scope: ${this.scope ?? "None"}
        Barrel: ${this.barrel ?? "None"}
        Magazine: ${this.magazine ?? "None"}
        Stock: ${this.stock ?? "None"}

        Stats

        Damage: ${this.damage}
        Stability: ${this.stability}
        Mobility: ${this.mobility}
        Stealth: ${this.stealth}

        ------------------------------ `);

    }

}