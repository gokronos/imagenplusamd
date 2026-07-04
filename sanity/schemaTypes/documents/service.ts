import { defineField, defineType } from 'sanity';
import {
  dateField,
  galleryField,
  mainImageField,
  orderField,
  seoField,
  slugField,
  statusField,
} from '../shared/fields';

export const service = defineType({
  name: 'service',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(90),
    }),
    slugField('title'),
    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(40).max(220),
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'string',
      description: 'Nombre del icono lucide-react que representara el servicio.',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Diseno', value: 'diseno' },
          { title: 'Marketing Digital', value: 'marketing-digital' },
          { title: 'Desarrollo Web', value: 'desarrollo-web' },
          { title: 'Produccion Audiovisual', value: 'produccion-audiovisual' },
          { title: 'Inteligencia Artificial', value: 'inteligencia-artificial' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta superior',
      type: 'string',
      description: 'Texto pequeno que aparece encima del titulo.',
      validation: (Rule) => Rule.max(70),
    }),
    mainImageField(),
    defineField({
      name: 'hero',
      title: 'Hero de pagina',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titulo principal',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: 'intro',
          title: 'Texto introductorio',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(260),
        }),
        defineField({
          name: 'featureOne',
          title: 'Caracteristica 1',
          type: 'string',
          validation: (Rule) => Rule.max(45),
        }),
        defineField({
          name: 'featureTwo',
          title: 'Caracteristica 2',
          type: 'string',
          validation: (Rule) => Rule.max(45),
        }),
        defineField({
          name: 'imageEyebrow',
          title: 'Etiqueta sobre imagen',
          type: 'string',
          validation: (Rule) => Rule.max(70),
        }),
        defineField({
          name: 'imageText',
          title: 'Texto sobre imagen',
          type: 'string',
          validation: (Rule) => Rule.max(130),
        }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Detalle de servicio',
      type: 'object',
      fields: [
        defineField({
          name: 'whatTitle',
          title: 'Titulo: Que hacemos',
          type: 'string',
          initialValue: 'Que hacemos',
          validation: (Rule) => Rule.max(70),
        }),
        defineField({
          name: 'whatText',
          title: 'Texto: Que hacemos',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.max(520),
        }),
        defineField({
          name: 'importanceTitle',
          title: 'Titulo: Importancia',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: 'importanceText',
          title: 'Texto: Importancia',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.max(520),
        }),
      ],
    }),
    defineField({
      name: 'deliverables',
      title: 'Entregables',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: 'packagesTitle',
      title: 'Titulo de paquetes',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'packages',
      title: 'Paquetes orientativos',
      type: 'array',
      of: [
        defineField({
          name: 'package',
          title: 'Paquete',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre',
              type: 'string',
              validation: (Rule) => Rule.required().max(50),
            }),
            defineField({
              name: 'description',
              title: 'Descripcion',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required().max(220),
            }),
            defineField({
              name: 'includes',
              title: 'Incluye',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.max(6),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'process',
      title: 'Proceso de trabajo',
      type: 'array',
      of: [
        defineField({
          name: 'processStep',
          title: 'Paso',
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Numero',
              type: 'string',
              validation: (Rule) => Rule.required().max(4),
            }),
            defineField({
              name: 'title',
              title: 'Titulo',
              type: 'string',
              validation: (Rule) => Rule.required().max(60),
            }),
            defineField({
              name: 'text',
              title: 'Texto',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required().max(180),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'cta',
      title: 'Texto del boton final',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    }),
    galleryField(),
    dateField('Fecha de publicacion'),
    statusField(),
    orderField(),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Servicio - ${subtitle}`,
        media,
      };
    },
  },
});
