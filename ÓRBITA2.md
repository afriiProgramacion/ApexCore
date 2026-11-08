# Órbita 2 – ApexCore

## 1. Enlaces

- **Figma:** [https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore)
- **Repositorio GitHub:** PENDIENTE DE AÑADIR.
- **Registro de IA:** [CHANGELOG.md](./CHANGELOG.md)

## 2. Organización del archivo Figma

| Apartado                            | Página                                                                                                                     | Contenido                                                                 |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Portada                             | [Portada](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=129-342)                         | Presentación del proyecto.                                                |
| Guía de estilo                      | [Guía de estilo](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=86-132)                   | Color, tipografía, elevación, retícula, espaciado y decisiones de diseño. |
| Wireframes originales de escritorio | [Wireframes escritorio](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=0-1)               | Diseños originales de la Órbita 1, conservados.                           |
| Wireframes originales de móvil      | [Wireframes móvil](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=51-74)                  | Diseños originales de la Órbita 1, conservados.                           |
| Rediseño de escritorio              | [Wireframes escritorio rediseño](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=215-1484) | 8 pantallas monocromáticas sin imágenes.                                  |
| Rediseño de móvil                   | [Wireframes móvil rediseño](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=228-651)       | 5 pantallas monocromáticas sin imágenes.                                  |
| Mockups de escritorio               | [Mockups escritorio](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=61-2)                 | Pantallas en modo claro y oscuro.                                         |
| Mockups de móvil                    | [Mockups móvil](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=86-131)                    | Pantallas en modo claro y oscuro.                                         |
| Componentes                         | [Componentes](https://www.figma.com/design/DAunPiULld1QmrHOPRYdXY/Wireframes-ApexCore?node-id=228-1094)                    | Biblioteca de escritorio y móvil.                                         |

## 3. Lista de comprobación

### Variables y sistema visual

- [x] Colección de variables primitivas.
- [x] Escala Red del 50 al 900.
- [x] Escala Blue del 50 al 900.
- [x] Escala Neutral del 50 al 900.
- [x] Colección de variables semánticas.
- [x] Modos claro y oscuro.
- [x] Alias semánticos a variables primitivas.
- [x] Sintaxis CSS para las variables.
- [x] Variables de espaciado y radios.

### Estilos

- [x] Escala tipográfica con 8 estilos de texto.
- [x] 3 estilos de elevación.
- [x] Estilo de retícula de 12 columnas.
- [x] Documentación de color, tipografía, elevación y espaciado.
- [x] Decisiones de diseño documentadas.

### Componentes

- [x] Componentes basados en elementos reales de los mockups.
- [x] Variantes de botón: Default, Hover, Focus, Pressed, Disabled y Error.
- [x] Variantes de tarjeta de piloto por escudería.
- [x] Variantes de selector: Default, Focus, Disabled y Error.
- [x] Variantes de switch: On y Off.
- [x] Propiedades editables en los componentes.
- [x] Auto Layout en los componentes que lo requieren.
- [x] Organización por átomos, moléculas y organismos.

### Wireframes y mockups

- [x] Conservación de los wireframes originales.
- [x] Rediseños de escritorio en blanco, negro y grises.
- [x] Rediseños de móvil en blanco, negro y grises.
- [x] Rediseños sin imágenes.
- [x] Mockups de escritorio.
- [x] Mockups de móvil.
- [x] Modos claro y oscuro en ambas plataformas.
- [x] Revisión estructural de los destinos de navegación.

### Revisión final

- [x] Probar manualmente el recorrido completo del happy path en el prototipo.
- [x] Revisar manualmente el contraste y la legibilidad de todas las pantallas.
- [x] Comprobar que todos los colores de contenido que deberían ser semánticos están vinculados a variables semánticas, no solo los fondos principales.
- [x] Publicar `ORBITA2.md` y `CHANGELOG.md` en GitHub.

## 4. Resumen de decisiones de diseño

ApexCore utiliza una identidad visual inspirada en la Fórmula 1.

- **Primario:** rojo ApexCore `#E10600`.
- **Secundario:** azul noche `#001A30`.
- **Tipografía:** Titillium Web.
- **Colores neutros:** escala Neutral para fondos, superficies, bordes y textos.
- **Variables:** separación entre primitivas y semánticas, con modos claro y oscuro.
- **Espaciado:** escala basada en múltiplos de 4 px.
- **Radios:** escala desde 0 hasta 999 px.
- **Elevación:** tres niveles de sombra.
- **Retícula de escritorio:** 12 columnas, gutter de 24 px y margen de 96 px.
- **Responsive:** versiones de escritorio y móvil con navegación adaptada a cada dispositivo.

Los wireframes originales se conservan sin modificaciones. Los rediseños se han creado en páginas independientes y se mantienen en blanco, negro y grises, sin imágenes.

## 5. Uso de inteligencia artificial

Se ha utilizado ChatGPT como herramienta de apoyo durante la Órbita 2 para:

- Proponer y organizar escalas cromáticas.
- Orientar la creación de variables primitivas y semánticas.
- Corregir problemas de aplicación del modo oscuro.
- Generar gráficos estadísticos de pilotos.
- Ayudar con el rediseño de wireframes.
- Crear y revisar componentes basados en los mockups.
- Revisar conexiones del prototipo.
- Completar y corregir la guía de estilo.

Las propuestas se han revisado y adaptado al proyecto. Se han descartado los resultados genéricos que no se correspondían con la interfaz real.

El detalle de las peticiones, resultados, elementos conservados y modificaciones se encuentra en `CHANGELOG.md`.

## 6. Trabajo pendiente

No queda trabajo pendiente, está todo terminado

