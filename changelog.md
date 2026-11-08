# ¿Qué he pedido a la IA?
**Documentación del Proyecto (`BRIEF.md`)**: Gemini me dió un borrador de como sería mi Brief del proyecto, sin embargo, yo lo leí y cambié bastantes cosas  
que no me terminaban de convencer

**Fichas user persona**: Los diseños de las fichas de user persona y como entiendo los userpersona me los hizo gemini y me quedé con lo que el me generó
**Wireframes**: Gemini generó a raiz de mi userflow como serían más o menos los Wireframes y usando esos diseños como guía cree los wireframes de mi proyecto 
**Rebranding del nombre:** chatGPT me dió ideas para el nombre del proyecto, me quedé con ApexCore, estos fueron los nombres que chatGPT me dió:
1. VeloGrid
2. ApexCore
3. GridPulse
4. CircuitSync
5. RaceVector
6. Pitwall One
7. ApexLink
8. Gridverse
9. Revora
10. ApexNova

**Restricciones Técnicas:** Lo de la restricción técnica que aparece en mi brief del proyecto, me la dió gemini
**Cambios en el brief original creado por mi**: En un principio mi aplicación iba a tener rachas y chats con amigos y cosas así, pero gemini me dijo que mejor las eliminara que iba a ser demasiado complejo
**Enfoque del MVP**: Gemini me dió gran parte del MVP porque yo no sabía por dónde empezar


# ÓRBITA 2

# CHANGELOG – ApexCore · Órbita 2

Registro de las intervenciones de inteligencia artificial realizadas durante la Órbita 2. Se documentan las peticiones, los resultados obtenidos, lo que se conservó y las modificaciones posteriores.

## 1. Identidad visual y paleta de colores

**Petición:** definir una identidad visual y cromática para ApexCore, una aplicación relacionada con la Fórmula 1.

**Resultado:** propuesta de una paleta basada en rojo, azul oscuro y colores neutros.

**Se conservó:**
- Rojo principal `#E10600`.
- Azul secundario `#001A30`.
- Uso de colores neutros para fondos y superficies.

**Se modificó:** se organizaron los colores en escalas y se adaptaron a las necesidades de la interfaz.

## 2. Variables primitivas y semánticas

**Petición:** recibir orientación para organizar las variables de Figma y crear un sistema de diseño reutilizable.

**Resultado:** estructura de colecciones primitivas y semánticas.

**Se conservó:** la separación entre valores de color y usos semánticos.

**Se modificó:** se completaron las escalas Red, Blue y Neutral del 50 al 900; se ampliaron las variables semánticas y se añadieron tokens de espaciado y radios. También se configuró la sintaxis CSS.

## 3. Modo oscuro

**Petición:** crear el modo oscuro y corregir los elementos que no se adaptaban correctamente.

**Resultado:** configuración de los modos claro y oscuro y revisión de los colores de las pantallas.

**Se conservó:** la identidad cromática y la estructura de los mockups.

**Se modificó:** se corrigieron referencias de variables, se vinculó el fondo principal de las pantallas a variables semánticas y se asignaron los modos correspondientes a escritorio y móvil. También se corrigieron conexiones de navegación que regresaban a pantallas claras desde el modo oscuro.

## 4. Gráficos estadísticos

**Petición:** generar un gráfico de líneas con las estadísticas de cuatro pilotos.

**Resultado:** gráfico lineal para representar las estadísticas.

**Se conservó:** la representación mediante líneas.

**Se modificó:** se solicitaron versiones con fondo blanco y posteriormente sin fondo para facilitar su integración en el diseño.

## 5. Rediseño de wireframes

**Petición:** rediseñar los wireframes siguiendo el diseño visual de los mockups.

**Resultado:** adaptación de las pantallas de escritorio y móvil.

**Cambio solicitado:** mantener intactos los wireframes originales y crear páginas independientes para los rediseños.

**Se conservó:** la estructura funcional de las pantallas como referencia.

**Se modificó:** los rediseños se realizaron exclusivamente con blanco, negro y grises, sin imágenes. Se revisaron los elementos que conservaban colores ajenos a la escala monocromática.

## 6. Componentes

**Petición inicial:** corregir y completar la biblioteca de componentes.

**Primer resultado:** componentes genéricos que no representaban suficientemente los mockups reales.

**Cambio solicitado:** utilizar los elementos que aparecen realmente en ApexCore, tanto en escritorio como en móvil.

**Resultado final:**
- Navegación lateral de escritorio.
- Navegación inferior móvil.
- Tarjetas de pilotos.
- Filas de clasificación.
- Selector de circuito.
- Tarjetas de aprendizaje.
- Fila de calendario.
- Tarjeta de siguiente Gran Premio.
- Control de ajustes.
- Botones con estados.
- Componentes con variantes y propiedades editables.

**Se conservó:** la apariencia de los elementos reales de los mockups.

**Se modificó:** se añadieron conjuntos de variantes para botones, tarjetas de pilotos, selectores y switches; se vincularon variables de espaciado y radios a botones y campos.

## 7. Selector desplegable de circuitos

**Petición:** crear un selector desplegable en la versión móvil y corregir su interacción para que pudiera abrirse y cerrarse.

**Resultado:** se creó una propuesta de menú desplegable.

**Cambio solicitado:** finalmente se decidió eliminar la interacción.

**Se conservó:** el selector estático original.

**Se modificó:** se retiró el menú añadido y se eliminaron sus reacciones.

## 8. Guía de estilo

**Petición:** completar la documentación visual del sistema de diseño.

**Resultado:** guía con color, tipografía, elevación, retícula, espaciado, radios y decisiones de diseño.

**Se conservó:** la identidad cromática y tipográfica de ApexCore.

**Se modificó:** se corrigieron las referencias de color, se documentaron las escalas completas y se vincularon las muestras tipográficas a sus estilos reales.

## 9. Revisión de calidad

**Petición:** revisar los requisitos de la entrega y corregir los elementos pendientes.

**Resultado:** auditoría de variables, estilos, componentes, wireframes y conexiones de prototipo.

**Se conservó:** la estructura original del proyecto y las pantallas de la Órbita 1.

**Se modificó:**
- Se corrigió el color del azul secundario en la guía.
- Se completaron los tokens de espaciado y radios.
- Se añadieron estados de botones y campos.
- Se corrigió el color residual de los interruptores de los wireframes móviles rediseñados.
- Se revisaron los destinos de navegación de las pantallas oscuras.

## 10. Criterio de uso de IA

La inteligencia artificial se ha utilizado como herramienta de apoyo, no como sustitución del criterio de diseño. Los resultados se han revisado, adaptado o descartado cuando no cumplían los requisitos o no representaban correctamente los mockups reales.

