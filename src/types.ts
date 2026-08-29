export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDetails: {
    duration: string;
    intensity: string;
    focusAreas: string[];
    idealFor: string;
    scheduleFrequency: string;
    includedBenefits: string[];
  };
  image: string;
  tag: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string[];
  bio: string;
  image: string;
  certifications: string[];
  instagramHandle?: string;
}

export interface Feature {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  goal: string;
  preferredTime: string;
  message?: string;
}
