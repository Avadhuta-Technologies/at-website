export interface PortfolioHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  industry: string;
  overview: string;
  impact: string;
  icon: string;
}

export interface PortfolioWhyChoosePoint {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioWhyChoose {
  title: string;
  points: PortfolioWhyChoosePoint[];
}

export interface PortfolioCTA {
  title: string;
  description: string;
  buttonText: string;
  email: string;
}

export interface PortfolioData {
  hero: PortfolioHero;
  projects: PortfolioProject[];
  whyChoose: PortfolioWhyChoose;
  cta: PortfolioCTA;
} 