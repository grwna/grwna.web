import { defineCollection, z } from 'astro:content'
// import { defineCollection, z } from 'astro/zod'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
})

export const collections = { blog, projects }