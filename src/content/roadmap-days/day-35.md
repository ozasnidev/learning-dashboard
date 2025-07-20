---
id: "w6-d5"
title: "Middleware condicional y entorno"
date: ""
day: 35
block: "Profundización en ASP.NET Core y Middleware"
section: "Condiciones y entornos"
topics:
  - "app.UseWhen() y MapWhen()"
  - Middleware por entorno (`Development`, `Production`)
  - Redirección condicional
resources:
  - { type: "video", url: "https://www.youtube.com/watch?v=2WZfAVdL_9g" }
  - { type: "lectura", url: "https://learn.microsoft.com/es-es/aspnet/core/fundamentals/middleware/extensibility" }
practice: "Crea un middleware que solo se ejecute en entorno de desarrollo y redirija si el usuario no está autenticado."
duration: 6
---

Hoy vas a hacer que tu app piense. Aprenderás a ejecutar lógica condicional según el entorno o la solicitud, como un sistema inteligente.