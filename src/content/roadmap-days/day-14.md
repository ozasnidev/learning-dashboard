---
id: "w3-d2"
title: "Creación de entidades y DbContext"
date: ""
day: 14
block: "Persistencia de datos con EF Core (Parte 1)"
section: "Modelado de datos"
topics:
  - Clases entidad
  - DbSet y DbContext
  - Convenciones vs configuración explícita
resources:
  - { type: "video", url: "https://www.youtube.com/watch?v=rIqVDyHwmDE&t=833s" }
  - { type: "lectura", url: "https://learn.microsoft.com/es-es/ef/core/modeling/entity-types" }
practice: "Crear entidades como Usuario, Producto y Pedido, y configurarlas en el DbContext."
duration: 6
---

Hoy vas a modelar tu base de datos desde el código. Las entidades serán tus tablas, y el DbContext será el puente entre tu app y el mundo SQL.