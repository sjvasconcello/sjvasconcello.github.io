# sjvasconcello.github.io

Portafolio personal de **Santiago J. Vasconcello Acuña** — Especialista Data Scientist @ Entel | Gen AI.

Sitio estático hecho a mano con HTML, CSS y JavaScript puro (sin frameworks ni build).
GitHub Pages lo publica directamente desde la carpeta [`docs/`](docs/).

## Estructura

```
docs/
├── index.html            # Página única: hero, sobre mí, experiencia, proyectos, skills, educación, contacto
├── cv.pdf                # CV descargable
├── .nojekyll
└── assets/
    ├── css/style.css     # Tema oscuro/claro, animaciones, responsive
    ├── js/main.js        # Partículas, typing, scrollspy, reveal, menú móvil
    └── img/profile.jpg
```

## Desarrollo local

```bash
python3 -m http.server 8000 --directory docs
# abrir http://localhost:8000
```

## Despliegue

Hacer commit y push a `main` — GitHub Pages (Settings → Pages → `/docs`) actualiza el sitio automáticamente.
