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

export const client = defineType({
  name: 'client',
  title: 'Clientes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(90),
    }),
    slugField('name'),
    defineField({
      name: 'industry',
      title: 'Industria',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: 'website',
      title: 'Sitio web',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
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
    dateField('Fecha de incorporacion'),
    statusField(),
    orderField(),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'industry',
      status: 'status',
      media: 'logo',
    },
    prepare({ title, subtitle, status, media }) {
      return {
        title,
        subtitle: `${subtitle} - ${status}`,
        media,
      };
    },
  },
});
