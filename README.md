# Progreso-Scheduler-JS
## Descripción

**Process Scheduler JS** es una simulación interactiva de planificación de procesos en sistemas operativos. Este proyecto permite aprender y visualizar cómo funcionan los algoritmos de planificación de procesos más comunes, como FIFO (First In First Out), Round Robin (RR) y Prioridad.

## Características

- **Algoritmos de planificación**:
  - FIFO (First In First Out)
  - Round Robin
  - Prioridad
- **Visualización animada**: Barras de progreso que muestran cómo se ejecutan los procesos.
- **Configuración flexible**: Puedes modificar el tiempo de ejecución de los procesos y el quantum para el algoritmo Round Robin.
- **Interfaz de usuario sencilla**: Formulario para agregar procesos y seleccionar el algoritmo de planificación.

## Instrucciones de uso

1. **Agregar un proceso**:
   - Introduce el nombre del proceso, el tiempo de CPU (en unidades) y la prioridad (un número donde un valor bajo indica mayor prioridad).
   - Haz clic en "Agregar" para añadir el proceso a la lista.

2. **Seleccionar un algoritmo de planificación**:
   - Escoge uno de los algoritmos disponibles: FIFO, Round Robin o Prioridad.
   - Si eliges Round Robin, también podrás configurar el valor del quantum (el tiempo máximo que cada proceso puede ejecutarse antes de ceder el CPU).

3. **Iniciar la simulación**:
   - Haz clic en "Iniciar Simulación" para ver cómo se ejecutan los procesos según el algoritmo seleccionado.
   - La simulación mostrará las barras de progreso que indican el estado de cada proceso mientras se ejecuta.

## Estructura del Proyecto
### `addProcess()`

Agrega un nuevo proceso a la lista de procesos. Recoge el nombre, el tiempo de CPU y la prioridad introducidos por el usuario.

### `renderProcessList()`

Muestra la lista de procesos en espera en la interfaz de usuario.

### `startSimulation()`

Inicia la simulación de los procesos según el algoritmo de planificación seleccionado (FIFO, Round Robin, Prioridad). Muestra la ejecución de los procesos.

### `renderProgress(p, time)`

Muestra la barra de progreso visual de un proceso mientras se ejecuta.

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y envía un pull request con las mejoras o correcciones.
