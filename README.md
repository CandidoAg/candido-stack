# 🚀 candido-stack | Portfolio & CV

Este repositorio contiene mi portafolio profesional y currículo interactivo, construido con un enfoque en rendimiento extremo (100% Lighthouse), tipado fuerte y modernización de herramientas.

El objetivo de este proyecto es servir como nexo entre mi experiencia consolidada en sistemas críticos transaccionales y mi dominio de arquitecturas modernas distribuidas.

---

### 🛠️ Tech Stack

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (SSG para máximo rendimiento) |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) (Dark Mode nativo y diseño responsivo) |
| **Imágenes** | [Sharp](https://sharp.pixelplumbing.com/) (Pipeline de optimización WebP automático) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (Tipado estricto para datos de proyectos) |
| **Paquetes** | [pnpm](https://pnpm.io/) (Gestión eficiente de dependencias) |

---

### 🏗️ Arquitectura del Proyecto

El proyecto sigue una estructura de **Data-Driven UI**, separando la información profesional de los componentes visuales:

* `src/data/`: Fuentes de verdad (TS/JSON) con experiencia profesional (CM.com, VIPERA).
* `src/components/`: Componentes atómicos (SkillBadges, TimelineItem).
* `optimize-images.js`: Script personalizado para procesamiento de assets en el build.

---

### 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install
```

# Levantar servidor de desarrollo
```bash
pnpm dev
```

# Optimizar imágenes y construir para producción
```bash
pnpm build
```

# Previsualizar el build de producción
```bash
pnpm preview
```

---
# Roadmap de Implementación
- [x] Configuración inicial Astro + Tailwind + pnpm.
- [x] Optimización de imágenes con Sharp (WebP).
- [x] Accesibilidad 100% y contraste corregido en Dark Mode.
- [x] Configuración de CI/CD para despliegue automático.

---
*"El código limpio es el resultado de un aprendizaje constante."*
