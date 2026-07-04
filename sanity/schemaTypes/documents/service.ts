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
