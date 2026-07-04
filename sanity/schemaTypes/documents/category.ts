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

export const category = defineType({
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(70),
    }),
    slugField('title'),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(20).max(180),
    }),
    mainImageField(),
    galleryField(),
    dateField('Fecha de publicacion'),
    statusField(),
    orderField(),
    seoField(),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      media: 'mainImage',
    },
    prepare({ title, status, media }) {
      return {
        title,
        subtitle: `Categoria - ${status}`,
        media,
      };
    },
  },
});
