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

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuracion del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del sitio',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    slugField('title'),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(40).max(160),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          validation: (Rule) => Rule.required().max(120),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    mainImageField(),
    galleryField(),
    dateField('Fecha de configuracion'),
    statusField(),
    orderField(),
    defineField({
      name: 'email',
      title: 'Correo principal',
      type: 'email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefono principal',
      type: 'string',
      validation: (Rule) => Rule.required().min(7).max(30),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes sociales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Etiqueta',
              type: 'string',
              validation: (Rule) => Rule.required().max(40),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ['http', 'https'],
                }),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'logo',
    },
    prepare({ title, status, media }) {
      return {
        title,
        subtitle: `Configuracion global - ${status}`,
        media,
      };
    },
  },
});
