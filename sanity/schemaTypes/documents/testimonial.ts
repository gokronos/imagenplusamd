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

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(90),
    }),
    slugField('authorName'),
    defineField({
      name: 'quote',
      title: 'Testimonio',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(20).max(700),
    }),
    defineField({
      name: 'authorRole',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(90),
    }),
    defineField({
      name: 'company',
      title: 'Empresa',
      type: 'reference',
      to: [{ type: 'client' }],
      validation: (Rule) => Rule.required(),
    }),
    mainImageField('Foto principal'),
    galleryField(),
    dateField('Fecha del testimonio'),
    statusField(),
    orderField(),
    seoField(),
  ],
  preview: {
    select: {
      title: 'authorName',
      role: 'authorRole',
      status: 'status',
      media: 'mainImage',
    },
    prepare({ title, role, status, media }) {
      return {
        title,
        subtitle: `${role} - ${status}`,
        media,
      };
    },
  },
});
