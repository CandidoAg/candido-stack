# 🚀 candido-stack | Portfolio & CV

Este repositorio contiene mi portafolio profesional y currículo interactivo, construido con un enfoque en rendimiento, tipado fuerte y modernización de herramientas.

El objetivo de este proyecto es servir como nexo entre mi experiencia consolidada en sistemas críticos transaccionales y mi dominio de arquitecturas modernas distribuidas.

---

### 🛠️ Tech Stack

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (SSG para máximo rendimiento) |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y Dark Mode) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (Tipado estricto para datos de proyectos) |
| **Paquetes** | [pnpm](https://pnpm.io/) (Gestión eficiente de dependencias) |
| **Gráficos** | [ApexCharts](https://apexcharts.com/) (Visualización de habilidades y trayectoria) |
| **Animaciones** | [Framer Motion](https://www.framer.com/motion/) |

---

### 🏗️ Arquitectura del Proyecto

El proyecto sigue una estructura de **Data-Driven UI**, separando la información profesional de los componentes visuales:

* `src/data/`: Contiene los archivos TS/JSON con la experiencia en empresas (CM.com, VIPERA) y side-projects de GitHub.
* `src/components/`: Componentes atómicos reutilizables (SkillBadges, CardComponent).
* `src/sections/`: Secciones principales de la One-Page (Hero, Experience, Skills, Projects).

---

### 🚀 Comandos de Desarrollo

Asegúrate de tener instalado [pnpm](https://pnpm.io/) en tu sistema.

```bash
# Instalar dependencias
pnpm install
```

# Levantar servidor de desarrollo (http://localhost:4321)
```bash
pnpm dev
```

# Construir para producción
```bash
pnpm build

# Previsualizar la construcción de producción
```bash
pnpm preview
```

---
# Roadmap de Implementación
- [ ] Configuración inicial de Astro + Tailwind.
- [ ] Implementación de la sección "Sobre mí" con Gráfico de Radar.
- [ ] Línea de tiempo interactiva para la trayectoria profesional (2019 - Presente).
- [ ] Integración de la API de GitHub para mostrar métricas de proyectos personales.
- [ ] Optimización SEO y generación de PDF descargable.

*"El código limpio es el resultado de un aprendizaje constante."*
