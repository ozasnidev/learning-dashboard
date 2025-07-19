import { defineCollection, z } from "astro:content"

const roadmapDays = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // mejor en formato ISO yyyy-mm-dd
    block: z.string(),
    section: z.string(),
    topics: z.array(z.string()),
    resources: z.array(z.object({
      type: z.enum(["video", "lectura", "pdf"]),
      url: z.string().url()
    })),
    practice: z.string(),
    duration: z.number(), // en horas
  })
})

export const collections = {
  "roadmap-days": roadmapDays
}