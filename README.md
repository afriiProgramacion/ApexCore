# Documentación de Planificación y Diseño: ApexCore

## 1. Product Backlog (ApexCore)

El backlog está dividido en bloques de prioridad (de lo imprescindible para que la aplicación arranque y aporte valor, hasta las mejoras secundarias). Cada ítem es una pieza funcional atómica que puede desarrollarse en pocos días y probarse de forma aislada.

| ID  | Prioridad | Módulo | Pieza / Tarea | Criterio de prueba aislada |
| --- | --- | --- | --- | --- |
| **PB-01** | Alta (Core) | Base / Auth | **Registro e inicio de sesión de usuario** | Crear cuenta con validación de email/contraseña, iniciar sesión y mantener sesión activa. |
| **PB-02** | Alta (Core) | Competición | **Listado de parrilla de pilotos y escuderías** | Mostrar fichas con foto, dorsal, nacionalidad y escudería actual desde la BD/API. |
| **PB-03** | Alta (Core) | Competición | **Filtro y búsqueda de pilotos** | Filtrar la parrilla por escudería o buscar por nombre en tiempo real. |
| **PB-04** | Alta (Core) | Competición | **Clasificación general (Pilotos y Constructores)** | Renderizar tablas ordenadas por puntos con posición, victorias y diferencia. |
| **PB-05** | Alta (Core) | Academy | **Glosario técnico con buscador** | Listar términos de F1 (DRS, *undercut*, *porpoising*) y filtrar por palabra clave o categoría. |
| **PB-06** | Media | Academy | **Listado de lecciones por niveles** | Mostrar ruta de aprendizaje (Básico, Estrategia, Técnica) indicando qué lecciones están bloqueadas o completadas. |
| **PB-07** | Media | Academy | **Visor de lección teórica + Quiz interactivo** | Leer una píldora teórica y responder preguntas tipo test con corrección inmediata. |
| **PB-08** | Media | Academy | **Sistema de vidas, rachas y progreso** | Descontar vida al fallar en el quiz, sumar XP al aprobar y guardar el progreso en el perfil del usuario. |
| **PB-09** | Media | Circuitos | **Listado y detalle de circuitos del calendario** | Mostrar tarjetas de Grandes Premios y abrir vista detalle con trazado, longitud, vueltas y récord. |
| **PB-10** | Baja | Circuitos | **Mapa interactivo del trazado** | Al pulsar sectores o curvas clave en el SVG del circuito, mostrar explicación técnica de frenada/adelantamiento. |
| **PB-11** | Baja | Perfil | **Panel de usuario y logros** | Visualizar estadísticas del alumno (racha actual, nivel, insignias desbloqueadas y edición básica de avatar). |
| **PB-12** | Baja | Admin | **CRUD de preguntas y términos del glosario** | Formulario con validación para que un administrador añada, edite o borre contenido de Academy. |

---

## 2. Mapa de Pantallas (Vistas y Datos)

La arquitectura de navegación de **ApexCore** se organiza en **7 vistas principales** conectadas mediante una barra de navegación superior fija (con indicador de vidas/racha visible si el usuario ha iniciado sesión):

### 1. Inicio / Dashboard (`/` o `/home`)

- **Propósito:** Punto de entrada rápido tanto para consultar el estado del mundial como para retomar el aprendizaje.
- **Datos que muestra:**
  - Tarjeta del **Próximo Gran Premio** (nombre, circuito, país, fecha y cuenta atrás).
  - **Top 3** actual del Mundial de Pilotos y Constructores.
  - **Acceso directo a ApexCore Academy:** última lección en curso, racha de días activos y botón «Continuar aprendiendo».
  - Término destacado del día («Concepto F1 del día»).

### 2. Mundial: Parrilla y Clasificación (`/mundial`)

- **Propósito:** Consulta de datos deportivos de la temporada.
- **Datos que muestra:**
  - Pestañas de cambio entre **Pilotos**, **Escuderías** y **Tabla de Puntos**.
  - **En vista Parrilla:** Tarjetas con foto, nombre, dorsal, bandera, equipo y puntos actuales + barra de búsqueda y filtro por equipo.
  - **En vista Clasificación:** Tabla completa con posición, piloto/equipo, puntos totales, podios y victorias.

### 3. Calendario y Circuitos (`/circuitos` y `/circuitos/:id`)

- **Propósito:** Explorar las sedes del campeonato y entender las características técnicas de cada pista.
- **Datos que muestra:**
  - **Vista general (`/circuitos`):** Listado cronológico de los Grandes Premios (Ronda, nombre oficial, fechas, bandera y estado: *Disputado / Próximo*).
  - **Vista detalle (`/circuitos/:id`):** Mapa/trazado interactivo del circuito (con sectores 1, 2 y 3 y zonas DRS), longitud en km, número de vueltas, récord de vuelta (tiempo, piloto y año) y notas técnicas (carga aerodinámica, desgaste de neumáticos).

### 4. ApexCore Academy (`/academy`)

- **Propósito:** Ruta de aprendizaje gamificada estilo Duolingo.
- **Datos que muestra:**
  - Barra superior de estado del alumno: **Vidas restantes** (ej. 5/5 corazones), **Racha de días** y **Puntos XP**.
  - **Árbol/Ruta de módulos** ordenados por dificultad (Nivel 1: *Reglas y Banderas*, Nivel 2: *Neumáticos y Pit Stops*, Nivel 3: *Aerodinámica y Estrategia*).
  - Estado visual de cada nodo: *Completado* (dorado), *Disponible* (activo) o *Bloqueado* (candado).

### 5. Vista de Lección / Quiz (`/academy/leccion/:id`)

- **Propósito:** Pantalla enfocada (sin menú de navegación distractor) para estudiar y superar el test.
- **Datos que muestra:**
  - Barra de progreso superior de la lección actual.
  - **Fase 1 (Teoría):** Explicación breve con apoyo visual/diagrama.
  - **Fase 2 (Evaluación):** Enunciado de pregunta, 3-4 opciones de respuesta, feedback visual (verde/rojo) con explicación del porqué y contador de vidas en tiempo real.
  - **Pantalla de resumen final:** XP ganados, porcentaje de acierto y actualización de racha.

### 6. Glosario Técnico (`/glosario`)

- **Propósito:** Diccionario rápido para resolver dudas durante una carrera.
- **Datos que muestra:**
  - Buscador instantáneo y filtros por categoría (*Estrategia*, *Mecánica*, *Normativa*, *Telemetría*).
  - Listado alfabético o en tarjetas con el **término**, **definición clara en lenguaje cotidiano** y un **ejemplo real** de carrera.

### 7. Acceso y Perfil de Usuario (`/login`, `/registro` y `/perfil`)

- **Propósito:** Gestión de cuenta y visualización del progreso personal.
- **Datos que muestra:**
  - **Auth (`/login`, `/registro`):** Formularios con validación en cliente y servidor (nombre de usuario, correo, contraseña) y mensajes de error claros.
  - **Perfil (`/perfil`):** Nombre, avatar, escudería favorita elegida, estadísticas acumuladas (lecciones completadas, precisión en quizzes, mejor racha) y vitrina de insignias desbloqueadas.