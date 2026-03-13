import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('La King Nursery'),
    category: z.enum([
      'Planting Guides',
      'Landscaping',
      'Lawn Care',
      'Irrigation',
      'Tree Care',
      'Container Gardening',
      'Native Plants',
      'Seasonal Tips',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
