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

export const project = defineType({
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    slugField('title'),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Servicios relacionados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(40).max(220),
    }),
    mainImageField(),
    galleryField(),
    dateField('Fecha de publicacion'),
    statusField(),
    orderField(),
    defineField({
      name: 'body',
      title: 'Caso de estudio',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.name',
      status: 'status',
      media: 'mainImage',
    },
    prepare({ title, client, status, media }) {
      return {
        title,
        subtitle: `${client ?? 'Sin cliente'} - ${status}`,
        media,
      };
    },
  },
});
