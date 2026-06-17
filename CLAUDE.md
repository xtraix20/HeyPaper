# CLAUDE.md — Reglas del Proyecto HeyPaper

## Stack obligatorio
- Next.js (App Router) — NO usar Pages Router.
- TypeScript estricto en todos los archivos (.tsx / .ts).
- Tailwind CSS para todo el estilizado. Prohibido CSS inline o styled-components.
- Zustand reservado para el manejo de estado global futuro (carrito, sesión). Dejar la estructura preparada aunque aún no se implemente lógica.

## Arquitectura
- Componentes modulares y reutilizables en src/components/.
- Separación clara de responsabilidades: presentación vs. lógica.
- El frontend debe quedar preparado para consumir APIs externas vía una capa de servicios (src/services/) apuntando a backends FastAPI (Python) y/o Java Spring Boot. Usar fetch tipado o un cliente centralizado; URLs base via variables de entorno (NEXT_PUBLIC_API_URL).
- No acoplar componentes a fuentes de datos: usar props e interfaces TypeScript.

## Identidad visual (tokens de color)
- crema    #FFFDF0
- cian     #84D6DC
- rosado   #FAA5AB
- amarillo #FFE466

## Convenciones
- Nombres de componentes en PascalCase.
- Tipos e interfaces en src/types/.
- Mantener nivel intermedio/avanzado: código directo, sin boilerplate innecesario.
