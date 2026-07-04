import { defineField } from 'sanity';

export const STATUS_OPTIONS = [
  { title: 'Borrador', value: 'draft' },
  { title: 'Publicado', value: 'published' },
  { title: 'Archivado', value: 'archived' },
];

export function slugField(source: string) {
  return defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: { source, maxLength: 96 },
    validation: (Rule) => Rule.required(),
  });
}

export function mainImageField(title = 'Imagen principal') {
  return defineField({
    name: 'mainImage',
    title,
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
  });
}

export function galleryField() {
  return defineField({
    name: 'gallery',
    title: 'Galeria',
    type: 'array',
    of: [
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          defineField({
            name: 'alt',
            title: 'Texto alternativo',
            type: 'string',
            validation: (Rule) => Rule.required().max(120),
          }),
          defineField({
            name: 'caption',
            title: 'Pie de foto',
            type: 'string',
            validation: (Rule) => Rule.max(140),
          }),
        ],
      },
    ],
    validation: (Rule) => Rule.max(20),
  });
}

export function dateField(title = 'Fecha') {
  return defineField({
    name: 'date',
    title,
    type: 'datetime',
    validation: (Rule) => Rule.required(),
  });
}

export function statusField() {
  return defineField({
    name: 'status',
    title: 'Estado',
    type: 'string',
    options: {
      list: STATUS_OPTIONS,
      layout: 'radio',
    },
    initialValue: 'draft',
    validation: (Rule) => Rule.required(),
  });
}

export function orderField() {
  return defineField({
    name: 'order',
    title: 'Orden',
    type: 'number',
    initialValue: 0,
    validation: (Rule) => Rule.required().integer().min(0),
  });
}

export function seoField() {
  return defineField({
    name: 'seo',
    title: 'SEO',
    type: 'seo',
    validation: (Rule) => Rule.required(),
  });
}
