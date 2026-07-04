# Arquitectura

## Decisiones principales

- **Next.js 15 App Router**: se usa `app/` para layouts, metadata, sitemap y
  robots. No se crean paginas finales todavia; la base queda lista para crecer
  por rutas y segmentos.
- **Feature Architecture**: `features/` agrupa dominio de negocio. Cada feature
  puede contener componentes, queries, servicios, hooks y tipos locales sin
  contaminar lo compartido.
- **Shared UI separado**: `components/` queda reservado para componentes
  transversales, primitivas de UI y piezas de layout reutilizables.
- **Sanity aislado**: `sanity/` contiene schemas, desk structure, cliente,
  queries GROQ y helpers de imagen. El Studio corre como herramienta separada
  con `npm run sanity:dev`, evitando que el build de Vercel cargue dependencias
  internas del editor.
- **Tailwind CSS v4**: la configuracion principal vive en CSS mediante
  `@theme`, reduciendo configuracion JavaScript y favoreciendo tokens globales.
- **SEO desde el nucleo**: `lib/metadata.ts`, `app/sitemap.ts`, `app/robots.ts`
  y el schema `seo` preparan metadata consistente desde el primer dia.
- **Calidad automatizada**: ESLint, Prettier, Husky y lint-staged quedan listos
  para mantener formato y reglas antes de cada commit.

## Convenciones de carpetas

```txt
app/              App Router, layout raiz, metadata dinamica, sitemap, robots
components/       Componentes compartidos y layouts reutilizables
features/         Dominios funcionales del sitio
hooks/            Hooks compartidos entre features
lib/              Integraciones base, metadata, constantes y configuracion
public/           Assets publicos estaticos
sanity/           CMS: schemas, cliente, queries, imagenes y Studio config
services/         Servicios de aplicacion e integraciones externas
styles/           Estilos globales y tokens Tailwind
types/            Tipos globales compartidos
utils/            Utilidades puras y helpers genericos
```

## Sanity CMS

Tipos preparados:

- Servicios
- Proyectos
- Clientes
- Testimonios
- Equipo
- Blog
- Categorias
- Configuracion del sitio
- SEO

## Siguiente paso recomendado

Conectar un proyecto real de Sanity, generar tipos desde GROQ cuando el dataset
exista y empezar a construir rutas por feature.
