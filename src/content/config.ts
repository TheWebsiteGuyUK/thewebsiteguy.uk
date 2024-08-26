// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({image}) => z.object({
    title: z.string(),
    featuredImage: image(),
    imgAlt: z.string(),
    excerpt: z.string(),
    // tags: z.array(z.string()),
    publishedDate: z.date(),
  }),
});


// const pages = defineCollection({
//   type: 'data', 
//   schema:({image}) => z.object({
//     title: z.string(),
//     blocks: z.array(
//       z.object({
//         discriminant: z.string(),
//         value: z.record(z.unknown()), // Allow any properties within the value
//       })
//     ),
//   }),
// });

export const collections = { posts };