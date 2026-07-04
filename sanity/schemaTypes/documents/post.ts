import { defineField, defineType } from 'sanity';
import {
  dateField,
  galleryField,
  mainImageField,
  orderField,
  seoField,
  slugField,
  statusField,
} from '@/sanity/schemaTypes/shared/fields';

export const post = defineType({
  name: 'post',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(110),
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
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    mainImageField(),
    galleryField(),
    dateField('Fecha de publicacion'),
    statusField(),
    orderField(),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      status: 'status',
      media: 'mainImage',
    },
    prepare({ title, date, status, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('es-CO')
        : 'Sin fecha';

      return {
        title,
        subtitle: `${formattedDate} - ${status}`,
        media,
      };
    },
  },
});
