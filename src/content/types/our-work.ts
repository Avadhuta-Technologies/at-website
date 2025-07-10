export interface OurWorkHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface OurWorkProject {
  title: string;
  description: string;
}

export interface OurWorkIndustry {
  name: string;
  projects: OurWorkProject[];
}

export interface OurWorkWhyChoosePoint {
  title: string;
  description: string;
}

export interface OurWorkWhyChoose {
  title: string;
  points: OurWorkWhyChoosePoint[];
}

export interface OurWorkCTA {
  title: string;
  description: string;
  buttonText: string;
  email: string;
}

export interface OurWorkData {
  hero: OurWorkHero;
  industries: OurWorkIndustry[];
  moreIndustries: {
    description: string;
    buttonText: string;
  };
  whyChoose: OurWorkWhyChoose;
  cta: OurWorkCTA;
} 