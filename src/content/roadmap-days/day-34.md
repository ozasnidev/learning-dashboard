---
title: "Configuración del pipeline en Startup.cs"
date: ""
day: 34
block: "Profundización en ASP.NET Core y Middleware"
section: "Startup y orden de ejecución"
topics:
  - "ConfigureServices vs Configure"
  - Orden de `UseRouting`, `UseAuthentication`, `UseAuthorization`
  - Impacto del orden en el comportamiento
resources:
  - { type: "video", url: "https://www.youtube.com/watch?v=UIkV-sLdEuE" }
  - { type: "lectura", url: "https://learn.microsoft.com/es-es/aspnet/core/fundamentals/startup" }
practice: "Reordena el pipeline y observa cómo cambia el comportamiento de la app."
duration: 6
---

Hoy entenderás cómo se construye el flujo de tu aplicación. El orden importa, y tú vas a dominar cómo se configuran los componentes clave del pipeline.