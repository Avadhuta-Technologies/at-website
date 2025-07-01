// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    bigImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    authorImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default('Pimjolabs'),
    comments: z.string(),
    views: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    postDetails: z.object({
      paraOne: z.string(),
      paraTwo: z.string(),
      title: z.string(),
      paraThree: z.string(),
      titleTwo: z.string(),
      paraFour: z.string(),
      paraFive: z.string(),
    }),
    quotes: z.object({
      quote: z.string(),
      author: z.string(),
    }),
  }),
});

const podsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    badgeColor: z.string().optional(),
    icon: z.string().optional(),
    teamComposition: z.array(z.string()),
    deliverables: z.array(z.string()),
    engagement: z.string(),
    priceINR: z.string(),
    priceUSD: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      image: z.string(),
    }),
    idealFor: z.array(z.string()),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })),
    process: z.object({
      title: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }),
    pastUseCases: z.array(z.string()),
    testimonials: z.array(z.object({
      name: z.string(),
      role: z.string(),
      content: z.string(),
      image: z.string(),
    })),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      buttonText: z.string(),
    }),
    upgradeNote: z.string().optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'pods': podsCollection,
};
