import { defineCollection, z } from 'astro:content';

const why = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const training = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['core', 'business']),
    items: z.array(z.string()),
    order: z.number(),
  }),
});

const market = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['overview', 'projection']),
    content: z.string().optional(),
    rows: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          highlight: z.boolean().optional(),
        }),
      )
      .optional(),
    footnote: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { why, training, market };
