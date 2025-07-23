import { packsCatalog } from '../catalog/_packs.js';

export const exploreAvailablePacksData = {
  title: "Available Packs",
  subtitle: "Specialized solutions for every development need",
  categories: packsCatalog.packCategories.map(category => ({
    id: category.id,
    title: category.title,
    description: category.description,
    packs: category.packs.map(pack => ({
      id: pack.id,
      title: pack.title,
      description: pack.description,
      duration: pack.duration,
      badge: pack.badge,
      badgeColor: pack.badgeColor,
      icon: pack.icon,
      features: pack.deliverables.slice(0, 3),
      idealFor: pack.idealFor,
      addOns: pack.addOns,
      whyItWorks: pack.whyItWorks,
      testimonials: pack.testimonials,
      cta: pack.cta,
      basePriceINR: pack.basePriceINR,
      basePriceUSD: pack.basePriceUSD,
      discountPercentage: pack.discountPercentage || 0
    }))
  }))
}; 