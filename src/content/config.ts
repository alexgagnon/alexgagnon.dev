import {defineCollection, z} from 'astro:content';
import { TAGS } from '../global.d';

export const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.nativeEnum(TAGS),
    created: z.string().transform((str) => new Date(str)),
    modified: z.string().transform((str) => new Date(str)).optional(),
    published: z.string().transform((str) => new Date(str)).optional(),
    image: z.string().optional(),
  })
});