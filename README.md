# Metro Weapon & Survival System

Proyecto desarrollado en TypeScript para la materia de Patrones Orientados a Objetos.

El sistema está inspirado en la saga videojuegos Metro y permite crear armas personalizadas mediante distintos tipos de armas y configuraciones de combate. Además, incorpora un sistema de supervivencia donde el jugador administra los filtros de su máscara de gas mientras recibe alertas sobre su estado.


# Patrones de diseño utilizados

## Factory Method

Este patrón se utiliza para crear el arma base seleccionada por el usuario.

Dependiendo de la opción elegida, el sistema crea automáticamente una instancia del arma correspondiente sin que el programa principal conozca la implementación concreta.

Fábricas implementadas:

- AssaultFactory
- SniperFactory
- ShotgunFactory

Cada fábrica crea un tipo específico de arma que posteriormente puede personalizarse.


## Builder

El patrón Builder permite personalizar el arma creada por la fábrica.

Cada configuración modifica accesorios y estadísticas del arma sin alterar su estructura base.

Builds implementadas:

- Tank
- Stealth
- Sniper
- Balanced

Cada build agrega distintos accesorios y modifica atributos como daño, estabilidad, movilidad y sigilo.


## Strategy

El patrón Strategy se utiliza para representar los distintos tipos de filtros que pueden instalarse en la máscara de gas.

Cada filtro implementa la misma interfaz pero proporciona una duración diferente.

Estrategias implementadas:

- BasicFilter
- ExtendedFilter
- MilitaryFilter

La máscara únicamente conoce la interfaz del filtro, permitiendo agregar nuevos tipos de filtros sin modificar su implementación.


## Observer

El patrón Observer permite que distintos objetos sean notificados automáticamente cuando cambia el estado de la máscara de gas.

Cada vez que disminuye el tiempo restante del filtro o este se agota, la máscara notifica a todos los observadores registrados.

Observadores implementados:

- ConsoleObserver
- ClockObserver

Esto desacopla el sistema de notificaciones de la lógica principal de la máscara.


# Estructura del proyecto

```
.
├── builders
├── builds
├── factory
├── filters
├── interfaces
├── models
├── observers
├── weapons
└── main.ts
```


# Tecnologías utilizadas

- TypeScript
- Deno


# Ejecución del proyecto

Ejecutar desde la carpeta raíz del proyecto:

```bash
deno run main.ts
```
O

```bash
deno --watch main.ts
```



# Flujo del programa

1. El usuario selecciona un tipo de arma.
2. Factory Method crea el arma base.
3. Builder personaliza el arma según la build elegida.
4. Se muestra la configuración final del arma.
5. El usuario selecciona un filtro para la máscara de gas.
6. Strategy instala el filtro correspondiente.
7. Observer notifica el consumo del filtro y alerta cuando debe reemplazarse.


# Autor

Proyecto desarrollado por:

**Joe Panday**

Ingeniería de Software