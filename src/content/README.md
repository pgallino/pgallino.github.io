# Modelo de contenidos

Este directorio es la única fuente de contenido del portfolio. Los componentes consumen datos tipados y no contienen información personal fija salvo etiquetas de interfaz.

## Colecciones previstas

| Colección | Configuración actual | Destino futuro posible |
| --- | --- | --- |
| Perfil | `personal` | `content/profile.json` |
| Proyectos | `projects` | `content/projects/*.md` |
| Trayectoria | `timeline` | `content/timeline/*.md` |
| Galería | `gallery` | `content/gallery/*.md` + media |
| PostMorfi | `postMorfi` | `content/case-studies/postmorfi.md` |

Un CMS Git puede escribir esos archivos mediante su propio flujo de autenticación y abrir commits o pull requests. El frontend debe seguir leyendo contenido versionado durante el build; nunca debe recibir tokens de GitHub ni permisos de escritura.

Campos recomendados para medios: ruta, texto alternativo, epígrafe, ancho, alto y fecha. Campos recomendados para proyectos: título, resumen, impacto, tecnologías verificadas, enlaces y estado de publicación.
