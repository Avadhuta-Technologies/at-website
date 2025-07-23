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

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      primaryButton: z.object({
        label: z.string(),
        href: z.string(),
      }),
      secondaryButton: z.object({
        label: z.string(),
        href: z.string(),
      }),
    }),
    howItWorks: z.object({
      title: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
    }),
    podsGrid: z.object({
      title: z.string(),
      subtitle: z.string(),
      pods: z.array(z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        icon: z.string(),
        badge: z.string(),
        badgeColor: z.string(),
      })),
    }),
    packsGrid: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      packs: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        badge: z.string(),
        badgeColor: z.string(),
      })),
    }),
    podStrategistCTA: z.object({
      question: z.string(),
      button: z.object({
        label: z.string(),
        href: z.string(),
      }),
    }),
    whyWorks: z.object({
      title: z.string(),
      items: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }),
    teamsFounders: z.object({
      title: z.string(),
    }),
    successStories: z.object({
      title: z.string(),
      cases: z.array(z.object({
        logo: z.string(),
        title: z.string(),
        client: z.string(),
        engagement: z.string(),
        success: z.string(),
        challenge: z.string(),
        outcomes: z.array(z.string()),
        quote: z.string(),
        quoteAuthor: z.string(),
        button: z.object({
          label: z.string(),
          href: z.string(),
        }),
      })),
    }),
    faq: z.object({
      title: z.string(),
      items: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })),
      cta: z.object({
        question: z.string(),
        description: z.string(),
        button: z.object({
          label: z.string(),
          href: z.string(),
        }),
      }),
    }),
    finalCTA: z.object({
      title: z.string(),
      description: z.string(),
      checklist: z.array(z.string()),
      buttons: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
      contactInfo: z.object({
        email1: z.string(),
      }),
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
  'home': homeCollection,
  'pods': podsCollection,
};
