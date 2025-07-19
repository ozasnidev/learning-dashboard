---
title: "Carga de datos: Eager, Lazy y Explicit"
date: ""
day: 20
block: "Persistencia de datos con EF Core (Parte 2) y optimización"
section: "Técnicas de carga"
topics:
  - `Include` y `ThenInclude`
  - Lazy Loading y configuración
  - Explicit Loading con `Entry().Collection().Load()`
resources:
  - { type: "video", url: "https://www.youtube.com/watch?v=rIqVDyHwmDE&t=3300s" }
  - { type: "lectura", url: "https://learn.microsoft.com/es-es/ef/core/querying/related-data/" }
practice: "Carga los pedidos de un usuario junto con sus productos usando Eager y Lazy Loading."
duration: 6
---

Hoy descubrirás cómo cargar datos relacionados de forma eficiente. Aprenderás cuándo conviene traer todo de golpe y cuándo esperar hasta que sea necesario.