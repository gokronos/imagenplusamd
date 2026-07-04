import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta titulo',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Meta descripcion',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(160),
    }),
    defineField({
      name: 'image',
      title: 'Imagen social',
      type: 'image',
      options: { hotspot: true },
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
    defineField({
      name: 'noIndex',
      title: 'No indexar',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
