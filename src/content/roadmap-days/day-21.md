---
id: "w4-d3"
title: "Optimización de rendimiento en EF Core"
date: ""
day: 21
block: "Persistencia de datos con EF Core (Parte 2) y optimización"
section: "Performance y eficiencia"
topics:
  - "AsNoTracking, paginación optimizada"
  - Consultas compiladas
  - Reducción de recorridos de red
resources:
  - { type: "video", url: "https://www.youtube.com/watch?v=rqGzFQeD-3Q" }
  - { type: "lectura", url: "https://learn.microsoft.com/es-es/ef/core/performance/" }
practice: "Implementa una consulta paginada con `AsNoTracking` y mide su rendimiento."
duration: 6
---

Hoy vas a acelerar tu aplicación. Aprenderás técnicas para reducir el consumo de memoria, mejorar la velocidad de consulta y evitar cuellos de botella.