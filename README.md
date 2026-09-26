# Portfolio de Pedro Gallino

Portfolio personal construido con React, TypeScript, Vite y Tailwind CSS. Incluye portada responsive, proyectos configurables, línea de tiempo, descarga de CV y una página dedicada a PostMorfi.

## Desarrollo local

Requisitos: Node.js 24 o una versión LTS compatible y npm.

```bash
npm install
npm run dev
```

Comandos disponibles:

```bash
npm run dev       # servidor local con recarga automática
npm run build     # validación TypeScript y build de producción
npm run preview   # vista previa del build
npm run lint      # análisis estático
```

## Contenidos

La información está separada de los componentes visuales en [`src/content/site.ts`](src/content/site.ts).

- `personal`: presentación, contacto, retrato y configuración del CV.
- `projects`: proyectos del portfolio; agregar o quitar elementos no requiere editar componentes.
- `timeline`: experiencia profesional y educación.
- `skills`: tecnologías y herramientas.
- `gallery`: fotografías personales y placeholders editables.
- `postMorfi`: contenido de la página de detalle.

Las imágenes viven en `public/images/`. Conviene usar WebP o AVIF, indicar textos alternativos y mantener un ancho máximo razonable.

## Actualizar el CV

El enlace estable del sitio apunta a:

```text
public/cv/pedro-gallino-cv.pdf
```

Para actualizarlo, reemplazar ese archivo y conservar el nombre. No hace falta tocar el código.

Para usar un CV externo, editar `personal.cv.externalUrl` en `src/content/site.ts`. Cuando esa propiedad contiene una URL, el portfolio abre el enlace externo; cuando queda vacía, usa el PDF local.

## Agregar un proyecto

Sumar un objeto al array `projects` en `src/content/site.ts` siguiendo el tipo `Project`. Los campos `repository`, `liveUrl` y `detailPath` son opcionales. No incluir tecnologías, enlaces o resultados que no estén verificados.

## Agregar fotografías

1. Copiar la imagen optimizada a `public/images/gallery/`.
2. Reemplazar un placeholder del array `gallery` con su ruta, texto alternativo y epígrafe.
3. Ejecutar `npm run build` para validar.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica automáticamente cada push a `main` o `master`.

En GitHub, ir a **Settings > Pages > Build and deployment** y seleccionar **GitHub Actions** como fuente. Para el sitio de usuario, el repositorio debe llamarse `pgallino.github.io`.

El build crea también `dist/404.html` para que las rutas internas, como `/projects/postmorfi`, funcionen al abrirse directamente en GitHub Pages.

## Preparación para un CMS basado en Git

La capa de contenido ya está centralizada y tipada, por lo que puede migrarse luego a Markdown, JSON o colecciones administradas por un CMS conectado al repositorio. La guía en [`src/content/README.md`](src/content/README.md) documenta el mapeo previsto.

No hay formularios públicos de subida, tokens ni credenciales en el frontend. La autenticación futura debe delegarse en el proveedor del CMS y mantenerse fuera del bundle del navegador.
