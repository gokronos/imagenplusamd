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

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Equipo',
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
      name: 'role',
      title: 'Rol',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(90),
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(40).max(700),
    }),
    mainImageField('Foto principal'),
    galleryField(),
    dateField('Fecha de incorporacion'),
    statusField(),
    orderField(),
    defineField({
      name: 'socialLinks',
      title: 'Redes',
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
      validation: (Rule) => Rule.max(6),
    }),
    seoField(),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
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
